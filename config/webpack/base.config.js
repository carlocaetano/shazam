import path from 'path';
import webpack from 'webpack';
import Config from 'webpack-config';
import postcss from '../postcss';
import paths from '../paths';
import env from '../env';

const { dependencies } = require(paths.app.packageJson);

export default new Config().merge({
  entry: {
    vendor: Object.keys(dependencies).filter(pkg => pkg !== '@drvem/shazam')
  },
  output: {
    path: paths.app.build,
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.css', ''],
    alias: {
      'babel-runtime/regenerator': require.resolve('babel-runtime/regenerator'),
      'config': `${paths.app.config}/dev.js`,
      'app': paths.app.src,
      'actions': `${paths.app.src}/actions`,
      'components': `${paths.app.src}/components`,
      'constants': `${paths.app.src}/constants`,
      'layouts': `${paths.app.src}/layouts`,
      'reducers': `${paths.app.src}/reducers`,
      'utils': `${paths.app.src}/utils`,
      'views': `${paths.app.src}/views`,
      'stylesheets': paths.app.stylesheets
    }
  },
  resolveLoader: {
    root: paths.nodeModules,
    moduleTemplates: ['*-loader']
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint',
      include: paths.app.src,
    }],
    loaders: [{
      test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)(\?.*)?$/,
      include: [paths.app.images, paths.app.nodeModules],
      loader: 'file',
      query: {
        name: 'static/media/[name].[hash:8].[ext]'
      }
    }, {
      test: /\.(mp4|webm)(\?.*)?$/,
      include: [paths.app.media, paths.app.nodeModules],
      loader: 'url',
      query: {
        limit: 10000,
        name: 'static/media/[name].[hash:8].[ext]'
      }
    }]
  },
  plugins: [
    new webpack.DefinePlugin(env),
  ],
  eslint: {
    configFile: path.join(__dirname, '../eslint.js'),
    useEslintrc: false
  },
  postcss
});