const TabsBasePage = require('./tabsBasePage');
const neutralface = require('../../images/neutralface.png');
const cross = require('../../images/cross.png');

class NeutralPage extends TabsBasePage {

  pageWillLoad() {
    super.pageWillLoad();
    this.neutralface = neutralface;
    this.cross = cross;
  }

  template = require('../../templates/neutralPage.hbs');

  bottomButtonEvent() {
    this.navigate('/');
  }
}

module.exports = NeutralPage;
