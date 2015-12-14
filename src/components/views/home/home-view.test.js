'use strict';

export default ngModule => {
  describe(`home-view`, () => {
    beforeEach(window.module(ngModule.name));
    it(`should test home-view`, () => {
      expect(true).to.be.true;
    });

  });
};