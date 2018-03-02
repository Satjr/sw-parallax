var path = require('path');

module.exports = {
    context: path.resolve('src'),
    entry:"./scripts/main.js",
    output: {
        path: path.resolve('build/src/'),
        publicPath: '/public/assets/js',
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: 'views',
    },

    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader" 
                    }, 
                    {
                        loader: "less-loader"
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,  
                use: [{
                    loader: 'url-loader',
                    options: { 
                        limit: 8000,
                        name: 'images/[hash]-[name].[ext]'
                    } 
                }]
            }
        ]
    },

    watch: true
}