const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        home: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,

            },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'my coins',
            hash: true,
            template: path.resolve(__dirname, 'public/index.html')
        }),
    ]
}
