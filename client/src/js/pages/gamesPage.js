const TabsBasePage = require('./tabsBasePage');
const gamesIcon = require('../../images/gamepad.png');
const cross = require('../../images/cross.png');

class GamesPage extends TabsBasePage {

  pageWillLoad() {
    super.pageWillLoad();
    this.gamesIcon = gamesIcon;
    this.cross = cross;
  }

  template = require('../../templates/gamesPages.hbs');

  bottomButtonEvent() {
    this.navigate('/');
  }

  faceButtonEvent() {
    this.navigate('walkingList');
  }

  leftButtonEvent() {
    this.navigate('calendar');
  }

  rightButtonEvent() {
    this.navigate('calendar');
  }
}

module.exports = GamesPage;
