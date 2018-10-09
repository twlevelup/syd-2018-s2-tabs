const BasePage = require('watch-framework').BasePage;
class Place1Page extends BasePage {
  template = require('../../templates/place1Page.hbs');
  bottomButtonEvent() {
    this.navigate('/');
  }
  


}

module.exports = Place1Page;
