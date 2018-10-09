const Place1Page = require('../../src/js/pages/place1Page');
const StorageHub = require('watch-framework').StorageHub;

describe('Place1Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', ()=> {
    it('should render the first place in a list of my favourite places', () => {
      const page = new Place1Page();
      expect(page.render()).toContain("<img src=\"../images/place1.png\">");
    })

  });
});