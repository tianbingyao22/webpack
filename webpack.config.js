const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 修改入口出口
module.exports = {
    mode: 'development',
    entry: "./src/main.js", // 入口
    output: {
        path: path.resolve(__dirname, "lib"), // 出口路径 绝对路径
        filename: "index.js" // 出口文件名
    },
    // devserve服务器配置
    devServer: {
        port: 3000,
        open: true,
    },
    // 插件
    plugins: [
        // 自动生成html文件
        new HtmlWebpackPlugin({
            template: './public/index.html',//参考模板
            filename: 'index.html',
        }),
        // 自动清除出口目录内容
        new CleanWebpackPlugin(),
    ],
    // 加载器
    module: {
        rules: [
            {//css加载器
                test: /\.css$/, // 匹配所有的css文件
                // 需要用到的loader,从右到左的顺序
                use: ["style-loader", "css-loader"],
            },
            {//less加载器
                test: /\.less$/, // 匹配所有的css文件
                // 需要用到的loader,从右到左的顺序
                use: ["style-loader", "css-loader", "less-loader"],
            },
            // 图片问题
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                type: 'asset',
                parser: {//解析器规则
                    dataUrlCondition: {//dataUrl的情况
                        maxSize: 2 * 1024,
                        //   maxSize限制最大值
                    },
                },
                generator: {
                    filename: 'images/[hash][ext]'
                },
            },
            // 字体图标问题
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name].[hash:6][ext]'
                }
            }
        ]
    }
}