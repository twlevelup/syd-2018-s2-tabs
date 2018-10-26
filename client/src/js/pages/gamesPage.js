const BasePage = require('watch-framework').BasePage;
const gamesIcon = require('../../images/gamepad.png');
const cross = require('../../images/cross.png');

class GamesPage extends BasePage {

  pageWillLoad() {
    this.gamesIcon = gamesIcon;
    this.cross = cross;
  }

  template = require('../../templates/gamesPages.hbs');

  bottomButtonEvent() {
    this.navigate('/');
  }

  faceButtonEvent(){
    this.navigate('gamesList');
  }
}

module.exports = GamesPage;
