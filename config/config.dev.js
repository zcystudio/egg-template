/**
 * This is the dev env for this API Server
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
  config.keys = `${appInfo.name}_1557383290250_7835`;

  config.mongo = {
    client: {
      host: 'dev.zhaochy.com',
      port: '27017',
      name: 'auth',
      user: 'admin',
      password: 'adminpw',
      options: { authSource: 'admin' },
    },
  };

  return config;
};
