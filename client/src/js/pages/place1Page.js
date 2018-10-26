const TabsBasePage = require('./tabsBasePage');
class Place1Page extends TabsBasePage {
  template = require('../../templates/place1Page.hbs');
  bottomButtonEvent() {
    this.navigate('/');
  }



}

module.exports = Place1Page;
