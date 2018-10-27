const TabsBasePage = require('./tabsBasePage');
const StorageHub = require('watch-framework').StorageHub;

class ContactsPage extends TabsBasePage {
  template = require('../../templates/contactsPage.hbs');

  pageWillLoad() {
    super.pageWillLoad();
    this.contacts = StorageHub.getData('contacts')
  }

  leftButtonEvent() {
    this.navigate('/');
  }
}

module.exports = ContactsPage;
