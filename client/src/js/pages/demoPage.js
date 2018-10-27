const TabsBasePage = require('./tabsBasePage');
class DemoPage extends TabsBasePage {
  template = require('../../templates/demoPage.hbs');
  
  pageWillLoad() {
    super.pageWillLoad();
  }
}



module.exports = DemoPage;
