const BasePage = require('watch-framework').BasePage;
const cross = require('../../images/cross.png');
const endOfYesterday = require('date-fns/end_of_yesterday');

class YesterdayPage extends BasePage {
  template = require('../../templates/calendarYesterday.hbs');

  pageWillLoad() {
    this.cross = cross;
    const dateTime = this.getDateTime();
    this.yesterday = dateTime.date;
  }

  getDateTime() {
    const date = endOfYesterday();
    const dateTime = date.toLocaleString().split(",");
    return {
      date: dateTime[0],
      time: dateTime[1],
    };
  }

  bottomButtonEvent() {
    this.navigate('/');
  }

  leftButtonEvent() {
    this.navigate('tomorrow');
  }

  rightButtonEvent() {
    this.navigate('today');
  }

  holdButtonEvent() {
    this.navigate('today');
  }


}

module.exports = YesterdayPage;
