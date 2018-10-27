const BasePage = require('watch-framework').BasePage;
const walkinggif = require('../../images/walkingGif.gif');
const cross = require('../../images/cross.png');

class DoneWalkingPage extends BasePage {

  pageWillLoad() {
    // this.walkinggif = walkinggif;
    this.cross = cross;
  }

  template = require('../../templates/doneWalkingPage.hbs');

  bottomButtonEvent() {
    this.navigate('/');
  }


}

module.exports = DoneWalkingPage;
