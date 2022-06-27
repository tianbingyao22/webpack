// 轮播图逻辑
console.log('实现轮播图的业务逻辑')
// tab栏切换的逻辑
// console.log('实现tabs标签页的逻辑')


// 引入模块
import "./tabs";
import "./banner";
// 不识别模块，可以用webpack识别模块
// 初始化，下载包，配置scripts


// 引入css
import "./styles/index.css"
// 解决css文件问题
// 1.下载包 2.webpack.config.js配置


// 引入less文件
import "./styles/index.less";

// 引入图片
import imgUrl from "./assets/1.gif";
let img=document.createElement("img");
img.src=imgUrl;
document.body.appendChild(img);

// 处理图片问题
// 1.下载包yarn add url-loader file-loader -D
// 2.webpack.config.js配置
