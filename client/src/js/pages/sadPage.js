const BasePage = require('watch-framework').BasePage;

class SadPage extends BasePage {
  template = require('../../templates/sadPage.hbs');

  bottomButtonEvent() {
    this.navigate('/');
  }
}

module.exports = SadPage;
