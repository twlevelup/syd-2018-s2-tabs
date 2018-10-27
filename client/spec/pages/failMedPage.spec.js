const FailMedPage = require('../../src/js/pages/failMedPage');

describe('The Fail Medicine Taking Page', () => {
  let watchFace;
  let page;

  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
    page = new FailMedPage();
    page.pageWillLoad();
  });

  describe('#render', () => {
   

    it('should contain an alert message', () => {
      expect(page.render()).toContain('FAMILY ALERTED');
    });

    it('should render an alert image', () => {
      expect(page.render()).toContain("<img class=\"fail-med-image\" src=\"../images/fail-med.png\"/>");
    });

    it('should render a cross image', () => {
      expect(page.render()).toContain("<img src=\"../images/cross.png\"/>");
    });

  }); 
});
