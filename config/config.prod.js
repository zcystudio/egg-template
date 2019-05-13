/**
 * This is the production env for this API Server
 *
 */


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
  config.keys = process.env.COOKIE_SIGNING_KEY || `${appInfo.name}_1557383290250_7835`;

  config.mongo = {
    client: {
      host: process.env.MONGODB_HOST,
      port: process.env.MONGODB_PORT || '27017',
      name: process.env.MONGODB_DBNAME,
      user: process.env.MONGODB_USER,
      password: process.env.MONGODB_PASS,
      options: { authSource: 'admin' },
    },
  };

  return config;
};
