const TabsBasePage = require('./tabsBasePage');
class TeamPage extends TabsBasePage {
  template = require('../../templates/teamPage.hbs');
  
  pageWillLoad() {
    super.pageWillLoad();
  }
}

module.exports = TeamPage;
