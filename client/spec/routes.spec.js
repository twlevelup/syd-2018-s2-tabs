const routes = require('../src/js/routes');

describe('routes', () => {

  it('all routes should exist', () => {
    expect(routes['/']).toBeDefined();
    expect(routes['team']).toBeDefined();
    expect(routes['404']).toBeDefined();
    expect(routes['sad']).toBeDefined();
    expect(routes['happy']).toBeDefined();
    expect(routes['neutral']).toBeDefined();
    expect(routes['demo']).toBeDefined();
    expect(routes['maps']).toBeDefined();
    expect(routes['direction']).toBeDefined();
    expect(routes['morning']).toBeDefined();
    expect(routes['evening']).toBeDefined();
    expect(routes['contactpolice']).toBeDefined();
    expect(routes['contacthospital']).toBeDefined();
    expect(routes['contactfriend']).toBeDefined();
    expect(routes['contactfriend2']).toBeDefined();
    expect(routes['callpolice']).toBeDefined();
    expect(routes['callhospital']).toBeDefined();
    expect(routes['callfriend']).toBeDefined();
    expect(routes['callfriend2']).toBeDefined();
    expect(routes['takemed']).toBeDefined();
  });
});
