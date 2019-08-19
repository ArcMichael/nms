clean:
	rm -rf ./node_modules
install:
	yarn config set registry https://registry.npm.taobao.org && yarn
hmr: # SOA_ENV hmr || production
	SOA_ENV=hmr RUN_ENV=production && npm run hmr
production: ## RUN_ENV QA STAGE DEVELOP PRODUCTION
	SOA_ENV=production RUN_ENV=production npm run product