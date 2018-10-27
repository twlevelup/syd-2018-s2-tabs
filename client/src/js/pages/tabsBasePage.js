const BasePage = require('watch-framework').BasePage;

class TabsBasePage extends BasePage {

  pageWillLoad() {
    this.counter = 0;
    this.firstClick = null;
    this.secondClick = null;
  }

  topButtonEvent() {
    this.counter += 1;
    if (this.counter === 1) {
     this.firstClick = Date.now();
    }
    if(this.counter === 2) {
      this.secondClick = Date.now();
      if ( (this.secondClick-this.firstClick) < 2000) {
        this.navigate('emergencyAlert')
      } else {
        this.firstClick = this.secondClick;
        this.secondClick = 0;
        this.counter = 1;
      }
    }
  }
}

module.exports = TabsBasePage;
