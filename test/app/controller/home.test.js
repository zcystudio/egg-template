const { app, assert } = require('egg-mock/bootstrap');
const pkg = require('../../../package.json');

describe('test/app/controller/home.test.js', () => {
  it('should assert', () => {
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });

  it('should GET /', () => app.httpRequest()
    .get('/')
    .expect('hi, egg')
    .expect(200));
});
