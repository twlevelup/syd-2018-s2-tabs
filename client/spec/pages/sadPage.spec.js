const SadPage = require('../../src/js/pages/sadPage');

describe('The Sad Face Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should contain the correct text', () => {
      const page = new SadPage();
      expect(page.render()).toContain('Sad face');
    });
  });
});