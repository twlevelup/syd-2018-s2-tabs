const MapsPage = require('../../src/js/pages/mapsPage');
const StorageHub = require('watch-framework').StorageHub;

describe('MapsPage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', ()=> {
    it('should render my current location', () => {
      const page = new MapsPage();
      expect(page.render()).toContain("<img src=\"../images/current-location.png\">");
    })

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

  describe('#topButtonEvent', () => {
    it('goes to Place1Page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new MapsPage(props);
      spyOn(page, 'navigate');

      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('place1');

    })
  })
})
