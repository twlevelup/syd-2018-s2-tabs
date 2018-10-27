const BasePage = require('watch-framework').BasePage;


class FailMedPage extends BasePage {
  template = require('../../templates/failMedPage.hbs');

  pageWillLoad() {

  }

 
  bottomButtonEvent() {
    this.navigate('/');
  }

}

module.exports = FailMedPage;
