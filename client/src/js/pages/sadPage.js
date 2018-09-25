const BasePage = require('watch-framework').BasePage;

class SadPage extends BasePage {
  template = require('../../templates/sadPage.hbs');
}

module.exports = SadPage;
