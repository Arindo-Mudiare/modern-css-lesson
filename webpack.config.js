const path = require('path');
require("babel-register");

module.exports = {
    mode: 'development',
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'main.js',
        path: path.resolve (__dirname,'app/temp/scripts')
       
    },
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
            }

        ]
        
    }
};