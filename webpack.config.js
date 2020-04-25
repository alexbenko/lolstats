 const path = require('path');
 module.exports = {
    // define entry file and output
    entry: './client/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'main.js'
    },
    mode: 'development',
    // define babel loader
    module: {
        rules: [
            { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
            {test: /\.(jpe?g|png|gif|svg)$/i, loader: "url-loader?name=app/images/[name].[ext]"},
            {test: /\.css$/i, use: ['style-loader', 'css-loader'],},
        ]
    }
};

//refractor this so the file paths are dynamic and will work on any system