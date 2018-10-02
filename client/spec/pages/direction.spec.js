const DirectionPage = require('../../src/js/pages/directionPage');
const StorageHub = require('watch-framework').StorageHub;

describe('DirectionPage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', ()=> {
    it('should render my way home', () => {
      const page = new DirectionPage();
      expect(page.render()).toContain("<img src=\"../images/take-me-home.png\">");
    })
  });
});
