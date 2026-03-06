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
import createDebug from 'debug';

const debug = createDebug('enchanted-icons-web-component:utils:tags.ts');

export let ICON_PREFIX = '';
try {
  ICON_PREFIX = import.meta.env.VITE_COMPONENT_PREFIX ? import.meta.env.VITE_COMPONENT_PREFIX : '';
} catch (error) {
  debug('Error accessing environment variable for icon prefix:', error);
  ICON_PREFIX = '';
}
debug(`Icon prefix is '${ICON_PREFIX}'`);
