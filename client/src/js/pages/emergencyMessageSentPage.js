const BasePage = require('watch-framework').BasePage;
const cross = require('../../images/cross.png');

class EmergencyMessageSentPage extends BasePage {
  pageWillLoad() {
    this.cross = cross;
  }




  template = require('../../templates/EmergencyMessageSentPage.hbs');

  bottomButtonEvent() {
    this.navigate('/');
  }



}

module.exports = EmergencyMessageSentPage;
