const BasePage = require('watch-framework').BasePage;
const neutralface = require('../../images/neutralface.png');
const sadface = require('../../images/cross.png');

class NeutralPage extends BasePage {

  pageWillLoad() {
    this.neutralface = neutralface;
    this.cross = cross;
  }

  template = require('../../templates/neutralPage.hbs');

  bottomButtonEvent() {
    this.navigate('/');
  }
}

module.exports = NeutralPage;
