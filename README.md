react sephora


![Sephora icon](http://s1.sephorastatic.cn/wcsfrontend/styles/styImg/logo.gif)

process
```js
    SOA_ENV change running mode hmr, develop, production
    RUN_ENV change running environment qa1, qa2, develop, stage, production
    prefix export SOA_ENV or RUN_ENV with running modes.

    SOA_ENV=hmr && RUN_ENV=stage npm run hmr
    SOA_ENV=production && RUN_ENV=stage npm run production
```


```js
    npm run development // 热更新开发模式
```

common
```js
    common // 公共模块
```

configuration
```js
    configuration // 配置文件de
```

node_module
```js
    node_module // Node Library
```

public
```js
    public // 静态资源
```

webpack
```js
    webpack // webpack 配置文件
```

babelrc
```js
    .babelrc // babel 配置文件
```

start.sh
```js
    Node version 7.10
    npm run hmr
    npm run development
    npm run production

```