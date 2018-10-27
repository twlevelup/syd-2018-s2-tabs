const BasePage = require('watch-framework').BasePage;
const walkinggif = require('../../images/walkingGif.gif');
const cross = require('../../images/cross.png');

class WalkingActivityPage extends BasePage {

  pageWillLoad() {
    this.walkinggif = walkinggif;
    this.cross = cross;
  }

  template = require('../../templates/walkingActivityPage.hbs');

  bottomButtonEvent() {
    this.navigate('/');
  }
}

module.exports = WalkingActivityPage;
