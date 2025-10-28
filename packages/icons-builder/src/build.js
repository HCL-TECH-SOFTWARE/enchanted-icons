const path = require('path');
const fs = require('fs');
const config = require('./config.json');
const { createCarbonReactIcon, createCarbonWebComponentIcon } = require('./templates');

const carbonSourcePath = path.resolve(process.cwd(), 'node_modules/@carbon/icons/es');
const carbonReactDestPath = path.resolve(process.cwd(), '../../packages/react/src/carbon/es');
const carbonWcDestPath = path.resolve(process.cwd(), '../../packages/web-component/src/carbon/es');

const ensureDirSync = (dirpath) => {
  try {
    fs.mkdirSync(dirpath, {
      recursive: true,
    });
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
}

const removeDirSync = (dirpath) => {
  try {
    fs.rmSync(dirpath, {
      recursive: true,
      force: true,
    });
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
};

const buildIcons = () => {
  console.log('START - Generating icons...');

  let reactSuccess = 0;
  let reactFailed = 0;
  let wcSuccess = 0;
  let wcFailed = 0;
  const failedIcons = [];
  
  // Clear old icons
  removeDirSync(carbonReactDestPath);
  removeDirSync(carbonWcDestPath);
  ensureDirSync(carbonReactDestPath);
  ensureDirSync(carbonWcDestPath);

  const reactRenames = new Map(Object.entries({
    ...config.common.renames,
    ...config.react.renames
  }));
  const reactExcludes = new Set([
    ...config.common.excludes,
    ...(config.react.excludes || []),
  ]);
  const wcRenames = new Map(Object.entries({
    ...config.common.renames,
    ...config.wc.renames
  }));
  const wcExcludes = new Set([
    ...config.common.excludes,
    ...(config.wc.excludes || []),
  ]);

  // Generate Carbon Icons
  console.log('Generating Carbon icons...');
  const files = fs.readdirSync(carbonSourcePath);

  for (const originalName of files) {
    // Create React components
    if (!reactExcludes.has(originalName) && fs.existsSync(path.join(carbonSourcePath, originalName, '32.js'))) {
      let isRenamed = false;
      let iconName = originalName;
      if (reactRenames.has(originalName)) {
        iconName = reactRenames.get(originalName);
        isRenamed = true;
      }

      try {
        const reactContent = createCarbonReactIcon(iconName, 32, '', isRenamed, originalName);
        const reactFilePath = path.join(carbonReactDestPath, iconName);
        ensureDirSync(reactFilePath);
        fs.writeFileSync(path.join(reactFilePath, 'index.tsx'), reactContent);
        reactSuccess += 1;
      } catch (err) {
        reactFailed += 1;
        failedIcons.push(`${originalName} (React)`);
        console.error(`[BUILDER] Failed to create React icon ${originalName}: ${err.message}`);
      }
    }

    // Create web components
    if (!wcExcludes.has(originalName) && fs.existsSync(path.join(carbonSourcePath, originalName, '32.js'))) {
      let isRenamed = false;
      let iconName = originalName;
      if (wcRenames.has(originalName)) {
        iconName = wcRenames.get(originalName);
        isRenamed = true;
      }
      
      try {
        const wcContent = createCarbonWebComponentIcon(iconName, 32, originalName);
        const wcFilePath = path.join(carbonWcDestPath, iconName);
        ensureDirSync(wcFilePath);
        fs.writeFileSync(path.join(wcFilePath, 'index.ts'), wcContent);
        wcSuccess += 1;
      } catch (err) {
        wcFailed += 1;
        failedIcons.push(`${originalName} (WC)`);
        console.error(`[BUILDER] Failed to create WC icon ${originalName}: ${err.message}`);
      }
    }
  }

  console.log('\n-- Build Summary ---');
  console.info(`✅ React Icons: ${reactSuccess} created, ${reactFailed} failed.`);
  console.info(`✅ Web Components: ${wcSuccess} created, ${wcFailed} failed.`);

  if (failedIcons.length > 0) {
    console.error('\n❌ Failed icons:');
    failedIcons.forEach(iconName => console.error(` - ${iconName}`));
  }

  console.log('\nDONE- Icon generation complete');
}

buildIcons();