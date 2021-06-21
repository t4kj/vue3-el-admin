// https://cli.vuejs.org/zh/config/
module.exports = {
  // 部署应用包时的基本 URL
  publicPath: process.env.NODE_ENV === "production" ? "" : "./",
  // 生产环境构建文件的目录
  outputDir: process.env.NODE_ENV === "production" ? "dist" : "devDist",
};
