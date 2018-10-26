const TabsBasePage = require('./tabsBasePage');
class MapsPage extends TabsBasePage {
  template = require('../../templates/mapsPage.hbs');

  bottomButtonEvent() {
    this.navigate('/');
  }


  leftButtonEvent() {
    this.navigate('direction');
  }


  rightButtonEvent() {
    this.navigate('place1');
  }
}

module.exports = MapsPage;
