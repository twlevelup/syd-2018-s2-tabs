const TabsBasePage = require('./tabsBasePage');
const countdowngif = require('../../images/countdown.gif');
const cross = require('../../images/cross.png');

class EmergencyAlertPage extends TabsBasePage {
  pageDidLoad()  {
    //https://stackoverflow.com/a/10730240
    const countdownEl = document.getElementById('countDownImg')
    const existing = countdownEl.getAttribute('src');
    countdownEl.setAttribute('src', existing.replace(/\?.*$/,"")+"?x="+Math.random());
  }

  pageWillLoad() {
    super.pageWillLoad();
    console.log('pageWillLoad')
    this.timerEvent = setTimeout(()=>{this.navigate('emergencyMessageSentPage')}, 6000)
    console.log(this.timerEvent)
    this.countdowngif = countdowngif;
    this.cross = cross;
  }
  template = require('../../templates/emergencyAlertPage.hbs');

  bottomButtonEvent() {

    clearTimeout(this.timerEvent);

    this.navigate('/');
  }

}

module.exports = EmergencyAlertPage;
