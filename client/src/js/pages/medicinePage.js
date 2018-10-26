const TabsBasePage = require('./tabsBasePage');
const cross = require('../../images/cross.png');

class MedicinePage extends TabsBasePage {
  template = require('../../templates/medicinePage.hbs');

  pageWillLoad() {

    this.cross = cross;
  }


  bottomButtonEvent() {
    this.navigate('/');
  }

}

module.exports = MedicinePage;
