const BasePage = require('watch-framework').BasePage;
const endOfTomorrow = require('date-fns/end_of_tomorrow');
const cross = require('../../images/cross.png');

class TomorrowPage extends BasePage {
  template = require('../../templates/calendarTomorrow.hbs');

  pageWillLoad() {
    this.cross = cross;
    // this.updateTimeEverySecond();
    const dateTime = this.getDateTime();
    this.tomorrow = dateTime.date;
    // this.tomorrow = startOfTomorrow().toLocaleString().split("T")[0];
  }

  getDateTime() {
    const date = endOfTomorrow();
    const dateTime = date.toLocaleString().split(",");
    return {
      date: dateTime[0],
      time: dateTime[1],
    };
  }

  // updateTimeEverySecond() {
  //   setInterval(() => this.updateTimeDisplay(this.getDateTime), 1000);
  // }

  bottomButtonEvent() {
    this.navigate('/');
  }

  leftButtonEvent() {
    this.navigate('today');
  }

  rightButtonEvent() {
    this.navigate('yesterday');
  }

  holdButtonEvent() {
    this.navigate('today');
  }


}

module.exports = TomorrowPage;
