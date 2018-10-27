const BasePage = require('watch-framework').BasePage;
const cross = require('../../images/cross.png');

class noEventPage extends BasePage {
  template = require('../../templates/noEvent.hbs');

  pageWillLoad() {
    this.cross = cross;
  }

  bottomButtonEvent() {
    this.navigate('/');
  }

}

module.exports = noEventPage;
