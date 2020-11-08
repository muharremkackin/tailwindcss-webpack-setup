const path = require("path");

module.exports = {
    entry: {
        app: './src/js/app.js'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
    },
    module: {
        rules: [{
            test: /\.css$/i,
            exclude: /node_modules/,
            use: ["style-loader", "postcss-loader"],
        }, ],
    },
};