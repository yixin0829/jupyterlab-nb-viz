const proxy = require('http-proxy-middleware');
console.log("webpack.config.js is running.");

module.exports = function(app) {
  app.use(
    '/parser',
    proxy({
      target: 'http://127.0.0.1:4000',
      changeOrigin: true,
    })
  );
};
