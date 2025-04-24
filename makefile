#/*
# ********************************************************************
# * Licensed Materials - Property of HCL                             *
# *                                                                  *
# * Copyright HCL Technologies Ltd. 2025. All Rights Reserved.       *
# *                                                                  *
# * Note to US Government Users Restricted Rights:                   *
# *                                                                  *
# * Use, duplication or disclosure restricted by GSA ADP Schedule    *
# ********************************************************************
# */

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