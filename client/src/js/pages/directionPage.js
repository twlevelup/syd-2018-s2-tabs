const TabsBasePage = require('./tabsBasePage');
class DirectionPage extends TabsBasePage {
  template = require('../../templates/directionPage.hbs');

  pageWillLoad() {
    super.pageWillLoad();
  }
  
  bottomButtonEvent() {
    this.navigate('/');
  }
}

module.exports = DirectionPage;
