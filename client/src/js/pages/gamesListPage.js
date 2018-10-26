const BasePage = require('watch-framework').BasePage;
const gamesIcon = require('../../images/gamepad.png');
const cross = require('../../images/cross.png');

class GamesListPage extends BasePage {

  pageWillLoad() {
    // this.gamesIcon = gamesIcon;
    // this.cross = cross;
  }

  template = require('../../templates/gamesListPage.hbs');

  // bottomButtonEvent() {
  //   this.navigate('/');
  // }

}

module.exports = GamesListPage;
