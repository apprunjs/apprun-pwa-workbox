## AppRun Template for Web Components

This app uses the service worker code from [Workbox](https://developers.google.com/web/tools/workbox).

> It uses [workbox-cli](https://developers.google.com/web/tools/workbox/guides/generate-service-worker/cli) instead of [workbox-webpack-plugin](https://developers.google.com/web/tools/workbox/guides/generate-service-worker/webpack) because in workbox-webpack-plugin v5, the automatically created manifest entries are limited to the webpack asset pipeline. [See here](https://github.com/GoogleChrome/workbox/releases).

Modify workbox.config.js to define pre-cached files, and runtime cache strategies.

* Use _npm start_ to start the dev server
* Use _npm run build_ to build for production

This is an application built with [AppRun](https://github.com/yysun/apprun).


Copyright (c) 2020 Yiyi Sun