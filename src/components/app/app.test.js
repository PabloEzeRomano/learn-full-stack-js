'use strict';

export default ngModule => {
  describe(`grv-app`, () => {
    beforeEach(window.module(ngModule.name));
    it(`should test grv-app`, () => {
      expect(true).to.be.true;
    });

  });
};