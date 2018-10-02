const MapsPage = require('../../src/js/pages/mapsPage');
const StorageHub = require('watch-framework').StorageHub;

describe('MapsPage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

describe('#render', ()=> {
  it('should render my current location', () => {
    const page = new MapsPage();
    expect(page.render()).toContain("<img src=\"../images/current-location.png\">");
  })
});
})
