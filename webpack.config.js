module.exports = {
    entry: './app/app.jsx',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, 
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: { presets: ['react', 'es2015', 'stage-0'] }
                    }, 
                    {
                        loader: 'eslint-loader'
                    }
                ],
            },
            {
                test: /\.scss$/,
                exclude: [/node_modules/],
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            }       
        ]
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin()
    ],
    devServer: {
        port: 3000
    }
}