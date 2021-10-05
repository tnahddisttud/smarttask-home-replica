const CompressionPlugin = require(`compression-webpack-plugin`);
const BrotliPlugin = require(`brotli-webpack-plugin`);
const path = require(`path`);
const zlib = require("zlib");

module.exports = {
  plugins: [
    new CompressionPlugin({
      filename: "[path][base].gz",
      algorithm: "gzip",
      test: /\.(js|css|html|svg|txt|eot|otf|ttf|gif)$/,
      threshold: 10240,
      minRatio: 0.7,
    }),
    new BrotliPlugin({
      filename: "[path][base].br",
      test: /\.(js|css|html|svg|txt|eot|otf|ttf|gif)$/,
      threshold: 10240,
      minRatio: 0.7,
    }),

    // new CompressionPlugin({
    //     filename: "[path][base].br",
    //     algorithm: "brotliCompress",
    //     test: /\.(js|css|html|svg)$/,
    //     compressionOptions: {
    //       params: {
    //         [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
    //       },
    //     },
    //     threshold: 10240,
    //     minRatio: 0.8,
    //     deleteOriginalAssets: false,
    //   }),
    // new CompressionPlugin({
    //     test: /\.(js|css|html|svg|txt|eot|otf|ttf|gif)$/,
    //     filename(info){
    //         let opFile= info.path.split('.'),
    //         opFileType =  opFile.pop(),
    //         opFileName = opFile.join('.');
    //         return `${opFileName}.${opFileType}.gzip`;
    //     }
    // })
  ],
};
