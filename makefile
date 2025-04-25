# /* ======================================================================== *
#  * Copyright 2025 HCL America Inc.                                          *
#  * Licensed under the Apache License, Version 2.0 (the "License");          *
#  * you may not use this file except in compliance with the License.         *
#  * You may obtain a copy of the License at                                  *
#  *                                                                          *
#  * http://www.apache.org/licenses/LICENSE-2.0                               *
#  *                                                                          *
#  * Unless required by applicable law or agreed to in writing, software      *
#  * distributed under the License is distributed on an "AS IS" BASIS,        *
#  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. *
#  * See the License for the specific language governing permissions and      *
#  * limitations under the License.                                           *
#  * ======================================================================== */


install:
	(cd packages/react && npm ci)
	(cd packages/web-component && npm ci)

lint:
	(cd packages/react && npm run lint)
	(cd packages/web-component && npm run lint)
	
build:
	(cd packages/react && npm run build)
	(cd packages/web-component && npm run build)

publish:
	(cd packages/react && npm publish --access public)
	(cd packages/web-component && npm publish --access public)