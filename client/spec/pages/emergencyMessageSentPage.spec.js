const EmergencyMessageSentPage = require('../../src/js/pages/emergencyMessageSentPage');

describe('The Emergency Message Sent Page', () => {
  let watchFace;

  describe('#render', () => {
    it('should contain the correct text', () => {
      const page = new EmergencyMessageSentPage();
      expect(page.render()).toContain('An alert was sent to your family!');
    });
  });


  describe('#bottomButtonEvent', () => {
    it('take you back to home screen', () => {

      const props = {
        navigate: () => { },
      };


      const page = new EmergencyMessageSentPage(props);
      spyOn(page, 'navigate');
      page.bottomButtonEvent()
      expect(page.navigate).toHaveBeenCalledWith('/');

    });
  });




});
