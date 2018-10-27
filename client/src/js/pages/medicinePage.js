const TabsBasePage = require('./tabsBasePage');
const cross = require('../../images/cross.png');
const BasePage = require('watch-framework').BasePage;

class MedicinePage extends TabsBasePage {
  template = require('../../templates/medicinePage.hbs');

  pageWillLoad() {

    this.cross = cross;
  }
  // pageWillLoad() {
  //   this.tick = tick;
  //   this.cross = cross;
  // }

  bottomButtonEvent() {
    this.navigate('/');
  }

}

module.exports = MedicinePage;
