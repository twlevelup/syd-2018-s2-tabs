const EmergencyAlertPage = require('../../src/js/pages/emergencyAlertPage');

describe('The Emergency Alert Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should contain the correct text', () => {
      const page = new EmergencyAlertPage();
      expect(page.render()).toContain('This is an Emergency Alert!');
    });
  });

  describe('#bottomButtonEvent', () => {
    it('take you back to home screen', () => {

      const props = {
        navigate: () => { },
      };


      const page = new EmergencyAlertPage(props);
      spyOn(page, 'navigate');
      page.bottomButtonEvent()
      expect(page.navigate).toHaveBeenCalledWith('/');

    });
  });


  describe('#5secondEvent', () => {
    it('take you to EmergencyMessageSentPage after 5 seconds', () => {

      const props = {
        navigate: () => { },
      };

      const page = new EmergencyAlertPage(props);
      spyOn(page, 'navigate');
      jest.useFakeTimers();
      page.pageWillLoad();
      jest.runTimersToTime(6001);

      expect(page.navigate).toHaveBeenCalledWith('emergencyMessageSentPage');

    });
  });









});
