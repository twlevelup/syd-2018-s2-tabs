const BasePage = require('watch-framework').BasePage;
const sadface = require('../../images/sadface.png');
const cross = require('../../images/cross.png');

class SadPage extends BasePage {

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
