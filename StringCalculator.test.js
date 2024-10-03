const StringCalculator = require('./StringCalculator');

describe('String Calculator', () => {
  
    it('should evaluate empty string to 0', () => {
      expect(StringCalculator.add("")).toBe(0);
    });

})