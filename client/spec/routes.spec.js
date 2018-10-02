const routes = require('../src/js/routes');

describe('routes', () => {

  it('all routes should exist', () => {
    expect(routes['/']).toBeDefined();
    expect(routes['team']).toBeDefined();
    expect(routes['404']).toBeDefined();
    expect(routes['sad']).toBeDefined();
    expect(routes['demo']).toBeDefined();
    expect(routes['maps']).toBeDefined();
    expect(routes['direction']).toBeDefined();
  });
});
