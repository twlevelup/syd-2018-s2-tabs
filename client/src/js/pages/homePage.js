const TabsBasePage = require('./tabsBasePage');
const StorageHub = require('watch-framework').StorageHub;
const AudioHub = require('watch-framework').AudioHub;
const logo = require('../../images/logo.png');
const plop = './sounds/plop.mp3';
const appsIcon = require('../../images/appsIcon.png');
const contactIcon = require('../../images/contactIcon.png');
const dobuleClickIcon = require('../../images/doubleExclamationIcon.png');
const mapIcon = require('../../images/mapIcon.jpg');

class HomePage extends TabsBasePage {
  template = require('../../templates/homePage.hbs');
  morningTime = '07:00:00';
  eveningTime = '17:00:00';
  medicineTime = '12:00:00';

  pageWillLoad() {
    super.pageWillLoad()
    StorageHub.setData('contacts', [
      { name: 'Ray', phoneNumber: '0431 111 111' },
      { name: 'Sinan', phoneNumber: '0431 222 222' },
      { name: 'Jafari', phoneNumber: '0431 333 333' },
    ])

    this.updateTimeEverySecond();
    const dateTime = this.getDateTime();
    this.date = dateTime.date;
    this.time = dateTime.time;
    this.logo = logo;
    this.counter = 0;
    this.firstClick = null;
    this.secondClick = null;
    this.appsIcon = appsIcon;
    this.contactIcon = contactIcon;
    this.dobuleClickIcon = dobuleClickIcon;
    this.mapIcon = mapIcon;
  }

  getDateTime() {
    const date = new Date(Date.now());
    const dateTime = date.toLocaleString().split(",");
    return {
      date: dateTime[0],
      time: dateTime[1],
    };
  }

  checkTime(time) {
    if (time.trim() === this.morningTime) {
      this.navigate('morning');
    }
    if (time.trim() === this.eveningTime) {
      this.navigate('evening');
    }
    if (time.trim() === this.medicineTime) {
      this.navigate('takemed');
    }
  }

  updateTimeEverySecond() {
    setInterval(() => this.updateTimeDisplay(this.getDateTime), 1000);
  }

  updateTimeDisplay(getTime) {
    const timeNow = getTime().time;
    const clockTime = document.getElementById("clock-time");
    if (clockTime) {
      clockTime.textContent = timeNow;
    }
    this.checkTime(timeNow);
  }

  rightButtonEvent() {
    this.navigate('maps');
  }

  leftButtonEvent() {
    this.navigate('contactpolice');
    //AudioHub.playSound(plop);
  }

  holdButtonEvent() {

  }

  topButtonEventHold(){

  }

  topButtonEvent() {
    this.counter += 1;
    if (this.counter === 1) {
     this.firstClick = Date.now();
     //console.log(this.firstClick + ' this is a first click');
    }
    if(this.counter === 2) {
      this.secondClick = Date.now();
        //console.log(this.secondClick + ' this is a secondClick click');
        //console.log(this.secondClick-this.firstClick+' this is math stuff');
      if ( (this.secondClick-this.firstClick) < 2000) {
        console.log('moveing')
        this.navigate('emergencyAlert')
      } else {
        this.firstClick = this.secondClick;
          //console.log(this.firstClick + ' this is a first reassign value');
        this.secondClick = 0;
        this.counter = 1;
      }
    }
  }

  bottomButtonEvent() {
    this.navigate('games');
  }
}

module.exports = HomePage;
