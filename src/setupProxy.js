const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://api.vikingship.xyz/api',
      changeOrigin: true,
      pathRewrite: {
        "^/api": ""
      }
    })
  );
  app.use(
    '/user',
    createProxyMiddleware({
      target: 'https://www.layui.com/demo/table/user',
      changeOrigin: true,
      pathRewrite: {
        "^/user": ""
      }
    })
  );
};