const CalendarPage = require('../../src/js/pages/calendarPage');

describe('The Calendar Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should contain a message that says Calendar', () => {
      const page = new CalendarPage();
      expect(page.render()).toContain('Calendar');
    });
  });

  describe('#bottomButtonEvent', () => {
    it('goes to root page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new CalendarPage(props);
      spyOn(page, 'navigate');

      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });


  describe('#faceButtonEvent', () => {
    it('goes to todayPage', () => {
      const props = {
        navigate: () => { },
      };
      const page = new CalendarPage(props);
      spyOn(page, 'navigate');

      page.faceButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('today');
    });
  });

  describe('#leftButtonEvent', () => {
    it('goes to calendar page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new CalendarPage(props);
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('games');
    });
  });

  describe('#rightButtonEvent', () => {
    it('goes to calendar page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new CalendarPage(props);
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('games');
    });
  });

});
