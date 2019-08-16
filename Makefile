clean:
	rm -rf ./node_modules
install:
	yarn config set registry https://registry.npm.taobao.org && yarn
develop:
	NODE_ENV=development npm run hmr
product:
	NODE_ENV=production npm run product