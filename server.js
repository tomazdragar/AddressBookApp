//Adding a Development Server
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.development.config');
const path = require('path');
const Express = require('express');
const rp = require('request-promise');


const app = new Express();
const port = 9000;

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    historyApiFallback: true
}))
app.use(webpackHotMiddleware(compiler))
delete process.env.BROWSER;


app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, function (error) {
    if (error) {
        console.error(error)
    } else {
        console.info('==> Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port)
    }
})
