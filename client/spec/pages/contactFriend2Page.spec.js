const contactFriend2Page = require('../../src/js/pages/contactFriend2Page');

describe('The Contact Second Friend Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should contain the correct text', () => {
      const page = new contactFriend2Page();
      expect(page.render()).toContain('George');
      expect(page.render()).toContain('0430-000-000');
    });
  });

  describe('#bottomButtonEvent', () => {
    it('goes to root page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new contactFriend2Page(props);
      spyOn(page, 'navigate');

      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

  describe('#rightButtonEvent', () => {
    it('goes to police contact page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new contactFriend2Page(props);
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('contactpolice');
    });
  });

  describe('#leftButtonEvent', () => {
    it('goes to first friend contact page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new contactFriend2Page(props);
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('contactfriend');
    });
  });
});
