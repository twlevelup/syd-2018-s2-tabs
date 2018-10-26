const TabsBasePage = require('./tabsBasePage');
const cross = require('../../images/cross.png');

class EmergencyMessageSentPage extends TabsBasePage {
  pageWillLoad() {
    this.cross = cross;
  }




  template = require('../../templates/EmergencyMessageSentPage.hbs');

  bottomButtonEvent() {
    this.navigate('/');
  }



}

module.exports = EmergencyMessageSentPage;
