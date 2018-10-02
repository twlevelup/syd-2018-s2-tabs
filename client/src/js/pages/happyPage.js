const BasePage = require('watch-framework').BasePage;
const happyface = require('../../images/happyface.png');

class HappyPage extends BasePage {

  pageWillLoad() {
    this.happyface = happyface;
  }

  template = require('../../templates/happyPage.hbs');

  bottomButtonEvent() {
    this.navigate('/');
  }
}

module.exports = HappyPage;
