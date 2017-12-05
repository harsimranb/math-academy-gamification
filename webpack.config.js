const BaseConfig = require('./webpack.base.config');
const path = require('path');

BaseConfig.entry = {
    app: './client/index.jsx',
};

BaseConfig.output = {
    filename: '[name].js',
    path: path.join(__dirname, 'server', 'public', 'js'),
};

module.exports = BaseConfig;
