const TabsBasePage = require('./tabsBasePage');

class FourOhFourPage extends TabsBasePage {
  template = require('../../templates/404Page.hbs');

  leftButtonEvent() {
    this.navigate('/');
  }
  rightButtonEvent() {
    this.navigate('/');
  }
  topButtonEvent() {
    this.navigate('/');
  }
  bottomButtonEvent() {
    this.navigate('/');
  }
}

module.exports = FourOhFourPage;
