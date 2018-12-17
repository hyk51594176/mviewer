import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    name: 'mviewer',
  },
  cache: true,
  external: [
    'viewerjs',
    'viewerjs/dist/viewer.css' 
  ],
  plugins: [
    // VuePlugin(),
    commonjs({
      include: 'node_modules/**', // 包括
    }),
    postcss({
      plugins: [autoprefixer, cssnano], 
      // extensions: [ '.less' ],
      extensions: ['.css']
    }),
    babel({
      exclude: 'node_modules/**', // 排除引入的库
    }),
    uglify(),
  ]
};