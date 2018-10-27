const WalkingListPage = require('../../src/js/pages/walkingListPage');

describe('The Walking List Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should contain a message that says games', () => {
      const page = new WalkingListPage();
      expect(page.render()).toContain('Walking');
    });
  });

  describe('#bottomButtonEvent', () => {
    it('goes to root page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new WalkingListPage(props);
      spyOn(page, 'navigate');

      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });
  //
  //
  // describe('#faceButtonEvent', () => {
  //   it('goes to gamesListPage', () => {
  //     const props = {
  //       navigate: () => { },
  //     };
  //     const page = new GamesPage(props);
  //     spyOn(page, 'navigate');
  //
  //     page.faceButtonEvent();
  //     expect(page.navigate).toHaveBeenCalledWith('gamesList');
  //   });
  // });

});
