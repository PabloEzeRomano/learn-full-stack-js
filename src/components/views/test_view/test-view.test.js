'use strict';

export default ngModule => {
  describe(`testView`, () => {
  
    beforeEach(window.module(ngModule.name));
    
    it(`should test testView`, () => {
      expect(true).to.be.true;
    });

  });
};