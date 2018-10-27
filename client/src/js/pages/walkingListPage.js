const BasePage = require('watch-framework').BasePage;
const walkingIcon = require('../../images/walkingStatic.png');
const cross = require('../../images/cross.png');

class WalkingListPage extends BasePage {

  pageWillLoad() {
    this.walkingIcon = walkingIcon;
    this.cross = cross;
  }

  template = require('../../templates/walkingListPage.hbs');

  bottomButtonEvent() {
    this.navigate('/');
  }

  faceButtonEvent(){
    this.navigate('walkingActivity');
  }

}

module.exports = WalkingListPage;
