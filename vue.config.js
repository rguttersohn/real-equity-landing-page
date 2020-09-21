module.exports = {
  configureWebpack: {
    output: {
      filename: 'real-equity.js'
    },
    optimization: {
      splitChunks: false
    },
  },
  filenameHashing: false
}