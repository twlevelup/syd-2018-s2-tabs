const BasePage = require('watch-framework').BasePage;

const cross = require('../../images/cross.png');

class MedicinePage extends BasePage {
  template = require('../../templates/medicinePage.hbs');

  pageWillLoad() {
    
    this.cross = cross;
  }

 
  bottomButtonEvent() {
    this.navigate('/');
  }

}

module.exports = MedicinePage;
