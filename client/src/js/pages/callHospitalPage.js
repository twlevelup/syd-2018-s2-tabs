const TabsBasePage = require('./tabsBasePage');
const hospital = require('../../images/hospital.png');
const cross = require('../../images/cross.png');

class CallHospitalPage extends TabsBasePage {
  template = require('../../templates/callHospitalPage.hbs');

  pageWillLoad() {
    this.hospital = hospital;
    this.cross = cross;
    this.counter = 0;
    this.timer;
    this.callStatus = 'Calling...';
    this.updateTimeEverySecond();
  }

  getDateTime() {
    const date = new Date(Date.now());
    const dateTime = date.toLocaleString().split(",");
    return {
      date: dateTime[0],
      time: dateTime[1],
    };
  }

  updateTimeEverySecond() {
    this.timer = setInterval(() => this.updateTimeDisplay(this.getDateTime), 1000);
  }

  updateTimeDisplay(getTime) {
    const timeNow = getTime().time;
    this.counter += 1;
    const seconds = this.counter - 2;

    var date = new Date(null);
    date.setSeconds(seconds);

    if (this.counter > 2) {
      const callStatus = document.getElementById("call-status");
      this.callStatus = callStatus;
      callStatus.textContent = date.toISOString().substr(11, 8);
    }
  }

  endCall() {
    clearInterval(this.timer);
    this.counter = 0;
  }

  bottomButtonEvent() {
    this.endCall();
    this.navigate('/');
  }

}

module.exports = CallHospitalPage;
