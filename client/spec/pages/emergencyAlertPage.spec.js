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
      expect(page.render()).toContain('This is an emergency alert!');
    });
  });
});
