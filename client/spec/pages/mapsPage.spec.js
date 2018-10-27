const MapsPage = require('../../src/js/pages/mapsPage');
const StorageHub = require('watch-framework').StorageHub;

describe('MapsPage', () => {
  let watchFace;
  let page;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
    page = new MapsPage();
  });

  describe('#render', ()=> {
    it('should render my current location', () => {

      expect(page.render()).toContain("<img src=\"../images/current-location.png\"/>");

    });

    it('should render a take-me-home image', () => {
      expect(page.render()).toContain("<img src=\"../images/take-me-home.png\"/>");
    });

    it('should render a cross image', () => {
      expect(page.render()).toContain("<img src=\"../images/cross.png\"/>");
    });

    it('should render a heart image', () => {
      expect(page.render()).toContain("<img src=\"../images/heart.png\"/>");
    });

  });

  describe('#bottomButtonEvent', () => {
    it('goes to HomePage', () => {
      const props = {
        navigate: () => { },
      };
      const page = new MapsPage(props);
      spyOn(page, 'navigate');

      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    })
  })

  describe('#leftButtonEvent', () => {
    it('goes to DirectionPage', () => {
      const props = {
        navigate: () => { },
      };
      const page = new MapsPage(props);
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('direction');
    })
  })

  describe('#rightButtonEvent', () => {
    it('goes to Place1Page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new MapsPage(props);
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('place1');

    })
  })
})
