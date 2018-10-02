const BasePage = require('watch-framework').BasePage;
class DirectionPage extends BasePage {
  template = require('../../templates/directionPage.hbs');
  leftButtonEvent() {
    this.navigate('/');
  }
}

module.exports = DirectionPage;
