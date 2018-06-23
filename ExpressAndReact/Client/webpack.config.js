const Plugin = require("html-webpack-plugin");
module.exports = {
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.html$/,
            use: [
                {
                    loader: "html-loader"
                }
            ]
        },
        {
            test: /\.css$/,
            loader: 'style-loader'
          }, {
            test: /\.css$/,
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[local]' //[name]__[local]___[hash:base64:5] name is name of css file, local is name of class/id or element in css file, and hash is dno.
            }}
        ]
    },
    plugins: [
        new Plugin({
            template: "./src/index.html", //npm start html location
            filename: "./index.html" //npm build html location
        })
    ],
    output: {
        filename: "script.js" //name the bundles js file other.js
    }
};