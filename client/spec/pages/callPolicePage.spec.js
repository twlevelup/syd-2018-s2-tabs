const callPolicePage = require('../../src/js/pages/callPolicePage');

describe('The Call Police Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'><div id="call-status"></div></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should contain the correct text', () => {
      const page = new callPolicePage();
      expect(page.render()).toContain('Police');
    });
  });

  describe('#bottomButtonEvent', () => {
    it('goes to root page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new callPolicePage(props);
      spyOn(page, 'navigate');

      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

  describe('#render', () => {
    it('should display calling before 3 seconds', () => {
      const page = new callPolicePage();
      page.pageWillLoad();
      expect(page.callStatus).toEqual('Calling...');
    });
  });

  describe('#updateTime', () => {
    it('should enter call after 3 seconds', () => {
      jest.useFakeTimers();
      const page = new callPolicePage();
      jest.spyOn(page, "updateTimeEverySecond");
      page.pageWillLoad();
      expect(page.callStatus).toEqual('Calling...');
      jest.runTimersToTime(3000);
      expect(page.updateTimeEverySecond).toBeCalled();
    });

  });
});
