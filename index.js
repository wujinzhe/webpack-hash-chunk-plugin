const createHash = require('crypto').createHash

class WebpackHashChunkPlugin {
  constructor(options) {
    this.options = Object.assign({
      algorithm: 'md5',
      encoding: 'hex',   // hex, latin1, base64
      length: 4
    }, options)
  }

  apply(compiler) {
    const options = this.options;
    compiler.hooks.compilation.tap('WebpackHashChunkPlugin', (compilation) => {
      compilation.hooks.afterOptimizeChunkIds.tap('WebpackHashChunkPlugin', (chunks) => {
        chunks.forEach(item => {
          const hash = createHash(options.algorithm)
          hash.update(`${process.env.PWD}${item.id}`)
          let hashId = hash.digest(options.encoding)
          hashId = hashId.substr(0, options.length)
          item.id = hashId
          item.ids = [hashId]
        })
      })
    })
  }
}

module.exports = WebpackHashChunkPlugin
