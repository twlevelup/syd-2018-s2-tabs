const BasePage = require('watch-framework').BasePage;

class DemoPage extends BasePage {
  template = require('../../templates/demoPage.hbs');
}

module.exports = DemoPage;
