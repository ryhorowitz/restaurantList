const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const path = require('path');
const fs = require('fs');

const config = {
    mode: 'development',
    entry: './public/src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'public/distro'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new Dotenv(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    target: 'node',
};

module.exports = config;