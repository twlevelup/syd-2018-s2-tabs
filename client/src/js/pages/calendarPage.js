const TabsBasePage = require('./tabsBasePage');
const calendarIcon = require('../../images/calendar-icon.png');
const cross = require('../../images/cross.png');
const left = require('../../images/arrowleft.png');
const right = require('../../images/arrowright.png');

class CalendarPage extends TabsBasePage {
  template = require('../../templates/calendarPage.hbs');

  pageWillLoad() {
    super.pageWillLoad();
    this.calendarIcon = calendarIcon;
    this.cross = cross;
    this.left = left;
    this.right = right;
  }

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

module.exports = CalendarPage;
