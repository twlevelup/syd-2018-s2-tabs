const contactFriendPage = require('../../src/js/pages/contactFriendPage');

describe('The Contact First Friend Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should contain the correct text', () => {
      const page = new contactFriendPage();
      expect(page.render()).toContain('Bekkie');
      expect(page.render()).toContain('0450-000-000');
    });
  });

  describe('#bottomButtonEvent', () => {
    it('goes to root page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new contactFriendPage(props);
      spyOn(page, 'navigate');

      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

  describe('#rightButtonEvent', () => {
    it('goes to second friend contact page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new contactFriendPage(props);
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('contactfriend2');
    });
  });

  describe('#leftButtonEvent', () => {
    it('goes to hospital contact page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new contactFriendPage(props);
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('contacthospital');
    });
  });
});
