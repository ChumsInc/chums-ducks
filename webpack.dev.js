const {merge} = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const path = require('path');

const localProxy = {
    target: {
        host: 'localhost',
        protocol: 'http:',
        port: 8081
    },
    ignorePath: false,
    changeOrigin: true,
    secure: false,
};

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        port: 8000,
        static: [path.join(__dirname, 'public'), __dirname],
        hot: true,
        proxy: {
            '/api': {...localProxy},
        }
    },
    devtool: 'inline-source-map',
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
    ]
});
