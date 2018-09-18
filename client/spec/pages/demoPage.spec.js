const DemoPage = require('../../src/js/pages/demoPage');

describe('The Demo Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should contain the correct text', () => {
      const page = new DemoPage();
      expect(page.render()).toContain('This is a demo');
    });
  });
});
