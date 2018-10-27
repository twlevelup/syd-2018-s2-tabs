const DoneWalkingPage = require('../../src/js/pages/doneWalkingPage');

describe('The Done Walking Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });
  describe('#render', () => {
    it('should have well done message', () => {
      const page = new DoneWalkingPage();
      expect(page.render()).toContain('Well done on being fit!');
    });
  });
  describe('#bottomButtonEvent', () => {
    it('goes to root page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new DoneWalkingPage(props);
      spyOn(page, 'navigate');

      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });





});
