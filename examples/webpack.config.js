const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

module.exports = {

  devtool: 'inline-source-map',

  entry: fs.readdirSync(__dirname).reduce((entries, dir) => {
    const fullDir = path.join(__dirname, dir)
    const entry = path.join(fullDir, 'app.js')
    if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
      entries[dir] = [entry]
    }
    return entries
  }, {}),

  output: {
    path: path.join(__dirname, '__build__'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/__build__/'
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          postcss: [require('postcss-cssnext')()]
        }
      }, {
        test: /\.js$/,
        include: path.join(__dirname, './'),
        exclude: path.join(__dirname, '../node_modules/'),
        loader: 'babel-loader'
      }, {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        query: {
          limit: 10000
        }
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000
        }
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue-movable': path.resolve(__dirname, '../dist/vue-movable.js'),
      'vue$': 'vue/dist/vue.esm.js'
    }
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'shared',
      filename: 'shared.js'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],

  devServer: {
    inline: true,
    port: 8080,
    hot: true
  }

}
