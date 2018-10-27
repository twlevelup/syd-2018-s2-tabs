const TabsBasePage = require('../../src/js/pages/tabsBasePage.js');

describe('The Tabs Base Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#topButtonEvent', () => {
    it('goes to emergencyAlertPage', () => {
      const props = {
        navigate: () => { },
      };
      const page = new TabsBasePage(props);
      page.pageWillLoad()
      spyOn(page, 'navigate');
      page.topButtonEvent()
      page.topButtonEvent()

      expect(page.navigate).toHaveBeenCalledWith('emergencyAlert');
    });

    it ('does not go to emergencyAlertPage', () => {
      const props = {
        navigate: () => { },
      };
      const page = new TabsBasePage(props);
      page.pageWillLoad();
      spyOn(page, 'navigate');
      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledTimes(0);
    });
  });
});
