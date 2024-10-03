const StringCalculator = require('./StringCalculator');

const checkResult = (expression, result) => {
    it(`should evaluate "${expression}" to ${result}`, () => {
      expect(StringCalculator.add(expression)).toBe(result);
    });
  };

describe('String Calculator', () => {
  
    it('should evaluate empty string to 0', () => {
      expect(StringCalculator.add("")).toBe(0);
    });

    describe('comma-separator',()=>{
        checkResult("1,2",3);
    })
})