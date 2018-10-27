const BasePage = require('watch-framework').BasePage;
const gamesIcon = require('../../images/gamepad.png');
const cross = require('../../images/cross.png');

class WalkingListPage extends BasePage {

  pageWillLoad() {
    // this.gamesIcon = gamesIcon;
    this.cross = cross;
  }

  template = require('../../templates/walkingListPage.hbs');

  bottomButtonEvent() {
    this.navigate('/');
  }

}

module.exports = WalkingListPage;
