const MedicinePage = require('../../src/js/pages/medicinePage');

describe('The Morning Page', () => {
  let watchFace;
  let page;

  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
    page = new MedicinePage();
    page.pageWillLoad();
  });

  describe('#render', () => {
    it('should render a tick image', () => {
      expect(page.render()).toContain("<img src=\"../images/tick.png\"/>");
    });

    it('should contain a medicine reminder', () => {
      expect(page.render()).toContain('TAKE YOUR MEDICINE');
    });

    

    it('should render medicine image', () => {
      expect(page.render()).toContain("<img class=\"med-image\" src=\"../images/happy-med.jpg\"/>");

    });

    it('should render a cross image', () => {
      expect(page.render()).toContain("<img src=\"../images/cross.png\"/>");
    })



  }); 

  describe('#faceButtonEvent', () => {
    it('goes to successful medicine taking page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new MedicinePage(props);
      spyOn(page, 'navigate');

      page.faceButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('successmed');
    });
  });

  describe('#bottomButtonEvent', () => {
    it('goes to fail medicine taking page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new MedicinePage(props);
      spyOn(page, 'navigate');

      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('failmed');
    });
  });
});
