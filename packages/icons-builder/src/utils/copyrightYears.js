/* ======================================================================== *
 * Copyright 2026 HCL America Inc.                                          *
 * Licensed under the Apache License, Version 2.0 (the "License");          *
 * you may not use this file except in compliance with the License.         *
 * You may obtain a copy of the License at                                  *
 *                                                                          *
 * http://www.apache.org/licenses/LICENSE-2.0                               *
 *                                                                          *
 * Unless required by applicable law or agreed to in writing, software      *
 * distributed under the License is distributed on an "AS IS" BASIS,        *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. *
 * See the License for the specific language governing permissions and      *
 * limitations under the License.                                           *
 * ======================================================================== */

import fs from 'fs';
import { execSync } from 'child_process';

/**
 * Attempts to read an existing copyright year from a file.
 * Falls back to the provided default when the file does not exist
 * or the header cannot be parsed.
 *
 * @param {string} filePath - Absolute path to the file containing the header.
 * @param {string|null} defaultYear - Year to return when no header year is found.
 * @returns {string|null} The discovered year or the provided default.
 */
const getCopyrightYear = (filePath, defaultYear) => {
  if (!fs.existsSync(filePath)) {
    return defaultYear;
  }
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const match = content.match(/Copyright\s+(\d{4})/);
    if (match && match[1]) {
      return match[1];
    }
  } catch (e) {
    // ignore error, return default
  }
  return defaultYear;
};

/**
 * Retrieves the earliest commit year for a file using git history.
 * Defaults to the current year when git data is unavailable.
 *
 * @param {string} filePath - File path to inspect.
 * @returns {string} Four-digit year string.
 */
const getCreationYearFromGit = (filePath) => {
  try {
    const output = execSync(
      `git log --diff-filter=A --format=%ad --date=format:%Y -- "${filePath}"`,
      { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] }
    ).trim();

    const years = output.split('\n').filter(Boolean);
    return years.length > 0 ? years[years.length - 1] : new Date().getFullYear().toString();
  } catch (e) {
    return new Date().getFullYear().toString();
  }
};

/**
 * Resolves the most recent modification year for a file.
 * Uses the working tree status first, then git history.
 *
 * @param {string} filePath - File path to inspect.
 * @returns {string} Four-digit year string.
 */
const getLastModifiedYearFromGit = (filePath) => {
  try {
    const statusOutput = execSync(
      `git status --porcelain -- "${filePath}"`,
      { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] }
    ).trim();

    if (statusOutput && statusOutput.startsWith('M')) {
      return new Date().getFullYear().toString();
    }

    const output = execSync(
      `git log -1 --format=%ad --date=format:%Y -- "${filePath}"`,
      { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] }
    ).trim();
    return output || new Date().getFullYear().toString();
  } catch (e) {
    return new Date().getFullYear().toString();
  }
};

export {
  getCopyrightYear,
  getCreationYearFromGit,
  getLastModifiedYearFromGit,
};
