const fs = require('fs');
const path = require('path');

// --- Configuration ---
// Source directory for your React icon components
const SOURCE_ROOT = path.resolve(process.cwd(), 'src/apps/es');
// Target directory for the new raw .svg files
const OUTPUT_ROOT = path.resolve(process.cwd(), '../../svg');
// ---

// Regex patterns to match the content of your index.tsx files
const attrsRegex = /const attrs: IIconAttrs = (\{[\s\S]*?\});/;
const contentRegex = /const content: IIconContent\[\] = (\[[\s\S]*?\]);/;
const sizeRegex = /export default createSvgIcon\('[^']+', (\d+), content, attrs\);/;

let processedCount = 0;
let skippedCount = 0;

// --- ⬇️ ADDED HELPER ⬇️ ---
// Helper to remove directories (from your builder.js)
const removeDirSync = (dirpath) => {
  try {
    fs.rmSync(dirpath, {
      recursive: true,
      force: true,
    });
  } catch (err) {
    // Ignore if the directory doesn't exist
    if (err.code === 'ENOENT') return;
    if (err.code !== 'EEXIST') throw err;
  }
};

// Helper to create directories recursively
const ensureDirSync = (dirpath) => {
  try {
    fs.mkdirSync(dirpath, { recursive: true });
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
};
// --- ⬆️ END ADDED HELPER ⬆️ ---


// Helper to convert JS object keys to kebab-case (e.g., strokeLinejoin -> stroke-linejoin)
const toKebabCase = (str) => {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
};

/**
 * Converts a JavaScript object into a string of XML attributes.
 * @param {object} attrsObj - The object to convert.
 */
const objectToAttrsString = (attrsObj) => {
  return Object.keys(attrsObj)
    .map((key) => {
      const value = attrsObj[key];
      return `${toKebabCase(key)}="${value}"`;
    })
    .join(' ');
};

/**
 * Generates an SVG XML string from the parsed attrs and content objects.
 * @param {object} attrs - The main <svg> attributes.
 * @param {Array} content - The array of child elements (e.g., <path>).
 */
const generateSvgString = (attrs, content) => {
  const svgAttrs = objectToAttrsString(attrs);

  const contentStrings = content.map((item) => {
    const elem = item.elem;
    const elemAttrs = objectToAttrsString(item.attrs);
    return `  <${elem} ${elemAttrs} />`;
  });

  return `<svg ${svgAttrs}>
${contentStrings.join('\n')}
</svg>
`;
};

/**
 * Recursively processes a directory to find and migrate icon files.
 * @param {string} currentDir - The current directory being scanned.
 */
function processDirectory(currentDir) {
  const entries = fs.readdirSync(currentDir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(currentDir, entry.name);

    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else if (entry.isFile() && entry.name === 'index.tsx') {
      console.log(`Processing: ${fullPath}`);
      try {
        const fileContent = fs.readFileSync(fullPath, 'utf8');

        // Extract the data strings
        const attrsMatch = fileContent.match(attrsRegex);
        const contentMatch = fileContent.match(contentRegex);
        const sizeMatch = fileContent.match(sizeRegex);

        if (!attrsMatch || !contentMatch || !sizeMatch) {
          console.warn(`  -> ⚠️  Skipping: Failed to parse ${fullPath}`);
          skippedCount++;
          continue;
        }

        // Use new Function() to safely "evaluate" the JS object strings
        const attrs = new Function(`return ${attrsMatch[1]}`)();
        const content = new Function(`return ${contentMatch[1]}`)();

        // Generate the SVG string
        const svgString = generateSvgString(attrs, content);

        // Get the relative path from the source root
        // e.g., "src/apps/es/elements/basic/button" -> "elements/basic/button"
        const relativeDir = path.relative(SOURCE_ROOT, path.dirname(fullPath));

        // Create the full output directory path, preserving the nested structure
        // e.g., "packages/icons-source/svg/elements/basic/button"
        const outputDir = path.join(OUTPUT_ROOT, relativeDir);
        
        // Create the final file path
        const iconName = path.basename(relativeDir);
        const outputPath = path.join(outputDir, `${iconName}.svg`);
        
        ensureDirSync(outputDir);
fs.writeFileSync(outputPath, svgString);
        processedCount++;
      } catch (err) {
        console.error(`  -> ❌ Error processing ${fullPath}: ${err.message}`);
        skippedCount++;
      }
    }
  }
}

// --- Run the migration ---
console.log('Starting migration from TSX to SVG...');
console.log(`Source: ${SOURCE_ROOT}`);
console.log(`Output: ${OUTPUT_ROOT}`);

// --- ⬇️ MODIFIED LOGIC HERE ⬇️ ---
console.log('Cleaning output directory...');
removeDirSync(OUTPUT_ROOT); // Delete the directory first
ensureDirSync(OUTPUT_ROOT); // Re-create the root directory
// --- ⬆️ END MODIFIED LOGIC ⬆️ ---

processDirectory(SOURCE_ROOT);

console.log(
  `\nMigration complete! ${processedCount} icons created, ${skippedCount} files skipped.`
);
console.log('You can now delete the migrate-to-svg.js script.');