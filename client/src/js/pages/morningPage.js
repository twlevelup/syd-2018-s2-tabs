const TabsBasePage = require('./tabsBasePage');
const sadface = require('../../images/sadface.png');
const happyface = require('../../images/happyface.png');
const neutralface = require('../../images/neutralface.png');
const cross = require('../../images/cross.png');

class MorningPage extends TabsBasePage {
  template = require('../../templates/morningPage.hbs');

  pageWillLoad() {
    this.sadface = sadface;
    this.happyface = happyface;
    this.neutralface = neutralface;
    this.cross = cross;
  }

  leftButtonEvent() {
    this.navigate('happy');
  }

  rightButtonEvent() {
    this.navigate('sad');
  }

  topButtonEvent() {
    this.navigate('neutral');
  }

  bottomButtonEvent() {
    this.navigate('/');
  }

}

module.exports = MorningPage;
