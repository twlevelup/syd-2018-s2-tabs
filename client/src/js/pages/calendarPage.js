const BasePage = require('watch-framework').BasePage;
const calendarIcon = require('../../images/calendar-icon.png');
const cross = require('../../images/cross.png');
const left = require('../../images/arrowleft.png');
const right = require('../../images/arrowright.png');

class GamesPage extends BasePage {

  pageWillLoad() {
    this.calendarIcon = calendarIcon;
    this.cross = cross;
    this.left = left;
    this.right = right;
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

  faceButtonEvent() {
    this.navigate('today');
  }


}

module.exports = GamesPage;
