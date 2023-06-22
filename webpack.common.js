const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/Index.tsx',
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html"
        }),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/'
    },
};
