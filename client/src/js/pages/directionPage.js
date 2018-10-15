const BasePage = require('watch-framework').BasePage;
class DirectionPage extends BasePage {
  template = require('../../templates/directionPage.hbs');
  bottomButtonEvent() {
    this.navigate('/');
  }
}

module.exports = DirectionPage;
