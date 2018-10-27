const BasePage = require('watch-framework').BasePage;
const cross = require('../../images/cross.png');
const left = require('../../images/arrowleft.png');
const right = require('../../images/arrowright.png');

class TodayPage extends BasePage {
  template = require('../../templates/calendarToday.hbs');

  pageWillLoad() {
    this.cross = cross;
    this.left = left;
    this.right = right;
    // this.updateTimeEverySecond();
    const dateTime = this.getDateTime();
    //this.date = dateTime.date;
    this.count = 0;
    this.currentDate = dateTime.date;
    //this.date = new Date();
    //this.currentDate.textContent = this.getDateTime().date;
  }

  updateDate(count) {
    const date = new Date();
    date.setDate(date.getDate() + count);
    const currentDate = document.getElementById("current-date");
    currentDate.textContent = date.toLocaleString().split(",")[0];
  }

  getDateTime() {
    const date = new Date(Date.now());
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
    //this.navigate('yesterday');
    this.count -= 1;
    this.updateDate(this.count);
  }

  rightButtonEvent() {
    //this.navigate('tomorrow');
    this.count += 1;
    this.updateDate(this.count);
  }

  faceButtonEvent() {
    if(this.count === 0){
      this.navigate('event');
    } else{
      this.navigate('noevent');
    }
  }


}

module.exports = TodayPage;
