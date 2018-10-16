const BasePage = require('watch-framework').BasePage;
const police = require('../../images/police.png');
const cross = require('../../images/cross.png');
const left = require('../../images/arrowleft.png');
const right = require('../../images/arrowright.png');

class contactPolicePage extends BasePage {
  template = require('../../templates/contactPolicePage.hbs');

  pageWillLoad() {
    this.police = police;
    this.cross = cross;
    this.left = left;
    this.right = right;
  }

  bottomButtonEvent() {
    this.navigate('/');
  }
}

module.exports = contactPolicePage;
