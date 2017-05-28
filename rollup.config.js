import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

const builds = {
  'development': {
    dest: './dist/vue-movable.js'
  },
  'production': {
    dest: './dist/vue-movable.min.js',
    plugins: [
      uglify()
    ]
  }
}

function genConfig (opts) {
  const config = {
    entry: './src/index.js',
    dest: opts.dest,
    plugins: [
      babel({
        exclude: 'node_modules/**',
        presets: ['es2015-rollup']
      })
    ].concat(opts.plugins || []),
    format: 'umd',
    moduleName: 'vueMobable'
  }
  return config
}

export default genConfig(builds[process.env.NODE_ENV || 'development'])
