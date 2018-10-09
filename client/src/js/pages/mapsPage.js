const BasePage = require('watch-framework').BasePage;
class MapsPage extends BasePage {
  template = require('../../templates/mapsPage.hbs');
  bottomButtonEvent() {
    this.navigate('/');
  }
  leftButtonEvent() {
    this.navigate('direction');
  }
  topButtonEvent() {
    this.navigate('place1');
  }

}

module.exports = MapsPage;
