const BasePage = require('watch-framework').BasePage;
const sadface = require('../../images/sadface.png');

class SadPage extends BasePage {

  pageWillLoad() {
    this.sadface = sadface;
  }

  template = require('../../templates/sadPage.hbs');

  bottomButtonEvent() {
    this.navigate('/');
  }
}

module.exports = SadPage;
