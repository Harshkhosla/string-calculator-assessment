const StringCalculator = require('./StringCalculator');

const checkResult = (expression, result) => {
    it(`should evaluate "${expression.replace(/\n/g, "\\n")}" to ${result}`, () => {
      expect(StringCalculator.add(expression)).toBe(result);
    });
  };

describe('String Calculator', () => {
  
    it('should evaluate empty string to 0', () => {
      expect(StringCalculator.add("")).toBe(0);
    });

    describe('comma-separator',()=>{
        checkResult("1,2",3);
        checkResult("7,2",9);
    })

    describe('new-line-seperator',()=>{
        checkResult("1\n4", 5);
        checkResult("4\n2\n3\n4\n5", 18);
    })
})