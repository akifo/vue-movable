// Rollup plugins
import uglify from 'rollup-plugin-uglify'
import vue from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'

// PostCSS plugins
import cssnano from 'cssnano'
import nested from 'postcss-nested'
import cssnext from 'postcss-cssnext'
import sugarss from 'sugarss'

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
      vue({
        compileTemplate: true
      }),
      postcss({
        plugins: [
          nested(),
          cssnext({
            warnForDuplicates: false
          }),
          cssnano()
        ],
        extensions: ['.sss'],
        parser: sugarss
      })
    ].concat(opts.plugins || []),
    format: 'umd',
    // format: 'es',
    moduleName: 'vueMobable'
  }
  return config
}

export default genConfig(builds[process.env.NODE_ENV || 'development'])
