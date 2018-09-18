const TeamPage = require('../../src/js/pages/teamPage');

describe('TeamPage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should render my team page', () => {
      const page = new TeamPage();
      expect(page.render()).toContain("<h1>Made by:</h1>");
    });

    it('should contain team members names', () => {
      const page = new TeamPage();
      expect(page.render()).toContain("EJ");
      expect(page.render()).toContain("Hugh");
      expect(page.render()).toContain("Anna");
      expect(page.render()).toContain("HongYi");
      expect(page.render()).toContain("Lillian");
      expect(page.render()).toContain("Ken");
    });

  });

});
