const TabsBasePage = require('./tabsBasePage');
const hospital = require('../../images/hospital.png');
const cross = require('../../images/cross.png');
const left = require('../../images/arrowleft.png');
const right = require('../../images/arrowright.png');

class contactHospitalPage extends TabsBasePage {
  template = require('../../templates/contactHospitalPage.hbs');

  pageWillLoad() {
    this.hospital = hospital;
    this.cross = cross;
    this.left = left;
    this.right = right;
  }

  bottomButtonEvent() {
    this.navigate('/');
  }

  rightButtonEvent() {
    this.navigate('contactfriend');
  }

  leftButtonEvent() {
    this.navigate('contactpolice');
  }
}

module.exports = contactHospitalPage;
