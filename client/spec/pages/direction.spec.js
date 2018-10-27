const DirectionPage = require('../../src/js/pages/directionPage');
const StorageHub = require('watch-framework').StorageHub;

describe('DirectionPage', () => {
  let watchFace;
  let page;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
    page = new DirectionPage();
  });


  describe('#render', ()=> {
    it('should render my way home', () => {
  
      expect(page.render()).toContain("<img src=\"../images/direction-home.png\">");
    })

    it('should render a cross image', () => {
      expect(page.render()).toContain("<img src=\"../images/cross.png\"/>");
    });
  });
});
