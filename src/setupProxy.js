const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://timbu-get-all-products.reavdev.workers.dev',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // remove /api from the request path
      },
    })
  );
};
