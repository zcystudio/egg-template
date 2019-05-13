/* eslint valid-jsdoc: "off" */


/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   * */
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = `${appInfo.name}_1557383290250_7835`;

  // add your middleware config here
  config.middleware = [];

  config.morgan = {
    format: ':date[iso] :method :url :status :res[content-length] - :response-time ms',
  };

  // For Request with http header Application/JSON
  config.security = {
    csrf: {
      ignoreJSON: true,
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
