const cssnext = require('postcss-cssnext');

/*
* Scripts that you want to split in a separated bundle called "vendor"
*/

exports.vendors = () => [
  'react',
  'react-dom'<% if (TEMPLATE_TYPE === 'with-router-redux') { %>,
  'react-router',
  'react-redux',
  'react-router-redux',
  'redux',
  'redux-thunk',
  'redux-logger'<% } %>
];

/*
*
* @function webpackConfig
*
* @param { env }
* @result 'development' | 'production'
*
* @return { object };
*
*/

exports.webpackConfig = (env) => ({
  /* your custom webpack config */
});

/*
*
* @function postcss
*
* @return [ plugins ];
*
*/

exports.postcss = () => [
  cssnext({
    browsers: [
      '>1%',
      'last 4 versions',
      'Firefox ESR',
      'not ie < 9', // React doesn't support IE8 anyway
    ]
  })
];

/*
*
* @function envConfig
*
* @param { env }
* @result 'development' | 'production'
*
* @return { object };
*
*/

exports.envConfig = (env) => ({
  api: {
    hostname: 'http://localhost:<%= DEFAULT_PORT %>'
  }
});

/*
*
* @function htmlData
*
* @param { env }
* @result 'development' | 'production'
*
* @return { object };
*
*/

exports.htmlData = (env) => ({
  TITLE: '<%= APP_TITLE %>'
});
