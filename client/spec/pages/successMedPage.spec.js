const SuccessMedPage = require('../../src/js/pages/successMedPage');

describe('The Success Medicine Taking Page', () => {
  let watchFace;
  let page;

  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
    page = new SuccessMedPage();
    page.pageWillLoad();
  });

  describe('#render', () => {

    it('should contain a medicine reminder', () => {
      expect(page.render()).toContain('GOOD JOB!');
    });

    it('should render a successful med taking image', () => {
      expect(page.render()).toContain("<img src=\"../images/success-med.png\"/>");
    });

    it('should render a cross image', () => {
      expect(page.render()).toContain("<img src=\"../images/cross.png\"/>");
    });

  });
});
