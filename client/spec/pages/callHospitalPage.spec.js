const callHospitalPage = require('../../src/js/pages/callHospitalPage');

describe('The Call Hospital Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'><div id="call-status"></div></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should contain the correct text', () => {
      const page = new callHospitalPage();
      expect(page.render()).toContain('Hospital');
    });
  });

  describe('#bottomButtonEvent', () => {
    it('goes to root page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new callHospitalPage(props);
      spyOn(page, 'navigate');

      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

  describe('#render', () => {
    it('should display calling before 3 seconds', () => {
      const page = new callHospitalPage();
      page.pageWillLoad();
      expect(page.callStatus).toEqual('Calling...');
    });
  });

  describe('#updateTime', () => {
    it('should enter call after 3 seconds', () => {
      jest.useFakeTimers();
      const page = new callHospitalPage();
      jest.spyOn(page, "updateTimeEverySecond");
      page.pageWillLoad();
      expect(page.callStatus).toEqual('Calling...');
      jest.runTimersToTime(3000);
      expect(page.updateTimeEverySecond).toBeCalled();
    });

  });
});
