const path = require('path');

module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "chartjs-plugin-colorscheme.umd.js",
        path: path.resolve(__dirname, "dist"),
        library: 'ColorScheme',
        libraryTarget: 'umd',
        globalObject: 'this',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
};
