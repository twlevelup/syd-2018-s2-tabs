const TabsBasePage = require('./tabsBasePage');
const sadface = require('../../images/sadface.png');
const cross = require('../../images/cross.png');

class SadPage extends TabsBasePage {

  pageWillLoad() {
    this.sadface = sadface;
    this.cross = cross;
  }

  template = require('../../templates/sadPage.hbs');

  bottomButtonEvent() {
    this.navigate('/');
  }
}

module.exports = SadPage;
