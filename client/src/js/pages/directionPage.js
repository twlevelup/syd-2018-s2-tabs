const TabsBasePage = require('./tabsBasePage');
class DirectionPage extends TabsBasePage {
  template = require('../../templates/directionPage.hbs');
  bottomButtonEvent() {
    this.navigate('/');
  }
}

module.exports = DirectionPage;
