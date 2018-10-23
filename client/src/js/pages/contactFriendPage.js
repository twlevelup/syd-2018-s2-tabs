const BasePage = require('watch-framework').BasePage;
const friend = require('../../images/woman.png');
const cross = require('../../images/cross.png');
const left = require('../../images/arrowleft.png');
const right = require('../../images/arrowright.png');

class contactFriendPage extends BasePage {
  template = require('../../templates/contactFriendPage.hbs');

  pageWillLoad() {
    this.friend = friend;
    this.cross = cross;
    this.left = left;
    this.right = right;
  }

  bottomButtonEvent() {
    this.navigate('/');
  }

  rightButtonEvent() {
    this.navigate('contactfriend2');
  }

  leftButtonEvent() {
    this.navigate('contacthospital');
  }
}

module.exports = contactFriendPage;
