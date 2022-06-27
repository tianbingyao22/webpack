const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 修改入口出口
module.exports = {
    mode:'development',
    entry: "./src/main.js", // 入口
    output: { 
        path: path.resolve(__dirname, "lib"), // 出口路径 绝对路径
        filename: "index.js" // 出口文件名
    },
    // devserve服务器配置
    devServer:{
        port:3000,
        open:true,
    },
    // 插件
    plugins:[
        // 自动生成html文件
        new HtmlWebpackPlugin({
            template:'./public/index.html',//参考模板
            filename:'index.html',
        }),
        // 自动清除出口目录内容
        new CleanWebpackPlugin(),
    ]
}