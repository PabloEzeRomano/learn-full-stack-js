'use strict';

export default ngModule => {
  describe(`lrn-app`, () => {
    beforeEach(window.module(ngModule.name));
    it(`should test lrn-app`, () => {
      expect(false).to.be.true;

    });

  });
}