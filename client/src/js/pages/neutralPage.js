const BasePage = require('watch-framework').BasePage;
const neutralface = require('../../images/neutralface.png');

class NeutralPage extends BasePage {

  pageWillLoad() {
    this.neutralface = neutralface;
  }

  template = require('../../templates/neutralPage.hbs');

  bottomButtonEvent() {
    this.navigate('/');
  }
}

module.exports = NeutralPage;
