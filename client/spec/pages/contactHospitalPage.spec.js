const contactHospitalPage = require('../../src/js/pages/contactHospitalPage');

describe('The Contact Police Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should contain the correct text', () => {
      const page = new contactHospitalPage();
      expect(page.render()).toContain('Hospital');
      expect(page.render()).toContain('1800-422-599');
    });
  });

  describe('#bottomButtonEvent', () => {
    it('goes to root page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new contactHospitalPage(props);
      spyOn(page, 'navigate');

      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });
});
