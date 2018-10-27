const BasePage = require('watch-framework').BasePage;
const cross = require('../../images/cross.png');

class EventPage extends BasePage {
  template = require('../../templates/todayEvent.hbs');

  pageWillLoad() {
    this.cross = cross;
  }

  bottomButtonEvent() {
    this.navigate('/');
  }

}

module.exports = EventPage;
