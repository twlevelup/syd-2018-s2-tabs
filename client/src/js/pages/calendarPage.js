const BasePage = require('watch-framework').BasePage;
const gamesIcon = require('../../images/gamepad.png');
const cross = require('../../images/cross.png');

class GamesPage extends BasePage {

  pageWillLoad() {
    this.gamesIcon = gamesIcon;
    this.cross = cross;
  }

  template = require('../../templates/calendarPage.hbs');

  bottomButtonEvent() {
    this.navigate('/');
  }

  leftButtonEvent() {
    this.navigate('games');
  }

  rightButtonEvent() {
    this.navigate('games');
  }

}

module.exports = GamesPage;
