const TabsBasePage = require('./tabsBasePage');
const happyface = require('../../images/happyface.png');
const cross = require('../../images/cross.png');

class HappyPage extends TabsBasePage {

  pageWillLoad() {
    super.pageWillLoad();
    this.happyface = happyface;
    this.cross = cross;
  }

  template = require('../../templates/happyPage.hbs');

  bottomButtonEvent() {
    this.navigate('/');
  }
}

module.exports = HappyPage;
