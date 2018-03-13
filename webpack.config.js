const webpackConfig = require('./node_modules/@ionic/app-scripts/config/webpack.config');
const webpack = require('webpack');

webpackConfig.plugins.push(
    new webpack.EnvironmentPlugin(['IONIC_ENV'])
);