const BasePage = require('watch-framework').BasePage;


class SuccessMedPage extends BasePage {
  template = require('../../templates/successMedPage.hbs');

  pageWillLoad() {

  }

 
  bottomButtonEvent() {
    this.navigate('/');
  }

}

module.exports = SuccessMedPage;
