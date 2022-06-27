const path = require("path")

// 修改入口出口
module.exports = {
    entry: "./src/main.js", // 入口
    output: { 
        path: path.resolve(__dirname, "lib"), // 出口路径 绝对路径
        filename: "index.js" // 出口文件名
    }
}