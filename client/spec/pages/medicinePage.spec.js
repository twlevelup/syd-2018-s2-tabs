const MedicinePage = require('../../src/js/pages/medicinePage');

describe('The Morning Page', () => {
  let watchFace;
  let page;

  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
    page = new MedicinePage();
    page.pageWillLoad();
  });

  describe('#render', () => {
    it('should render a tick image', () => {
      expect(page.render()).toContain("<img src=\"../images/tick.png\"/>");
    });

    it('should contain a medicine reminder', () => {
      expect(page.render()).toContain('TAKE YOUR MEDICINE');
    });

    

    it('should render medicine image', () => {
      expect(page.render()).toContain("<img class=\"med-image\" src=\"../images/happy-med.jpg\"/>");

    });

    it('should render a cross image', () => {
      expect(page.render()).toContain("<img src=\"../images/cross.png\"/>");

    })



  }); 

  // describe('#bottomButtonEvent', () => {
  //   it('goes to root page', () => {
  //     const props = {
  //       navigate: () => { },
  //     };
  //     const page = new MorningPage(props);
  //     spyOn(page, 'navigate');

  //     page.bottomButtonEvent();
  //     expect(page.navigate).toHaveBeenCalledWith('/');
  //   });
  // });

  // describe('#leftButtonEvent', () => {
  //   it('goes to happy page', () => {
  //     const props = {
  //       navigate: () => { },
  //     };
  //     const page = new MorningPage(props);
  //     spyOn(page, 'navigate');

  //     page.leftButtonEvent();
  //     expect(page.navigate).toHaveBeenCalledWith('happy');
  //   });
  // });

  // describe('#rightButtonEvent', () => {
  //   it('goes to sad page', () => {
  //     const props = {
  //       navigate: () => { },
  //     };
  //     const page = new MorningPage(props);
  //     spyOn(page, 'navigate');

  //     page.rightButtonEvent();
  //     expect(page.navigate).toHaveBeenCalledWith('sad');
  //   });
  // });

  // describe('#topButtonEvent', () => {
  //   it('goes to neutral page', () => {
  //     const props = {
  //       navigate: () => { },
  //     };
  //     const page = new MorningPage(props);
  //     spyOn(page, 'navigate');

  //     page.topButtonEvent();
  //     expect(page.navigate).toHaveBeenCalledWith('neutral');
  //   });
  // });

});
