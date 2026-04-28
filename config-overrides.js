const { DefinePlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    webpack: function override(config, env) {
        config.module = {
            rules: [
                {
                    test: /\.js$|\.jsx$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env",
                                "@babel/preset-react",
                                "@babel/preset-typescript",
                            ],
                        },
                    },
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        };

        config.resolve.fallback = {
            url: require.resolve("url"),
            fs: false,
            crypto: require.resolve("crypto-browserify"),
            http: require.resolve("stream-http"),
            https: require.resolve("https-browserify"),
            os: require.resolve("os-browserify/browser"),
            stream: require.resolve("stream-browserify"),
            path:require.resolve("path-browserify"),
            zlib:require.resolve("browserify-zlib")
            
        };

        // config.resolve ={
        //     preferRelative: true,
        // };

        config.plugins = [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "public/index.html"),
                origin: "http://localhost:3000",
            }),
            new DefinePlugin({}),
        ];
        return config;
    },

};