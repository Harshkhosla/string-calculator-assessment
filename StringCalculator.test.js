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

    describe('comma-separator', () => {
        checkResult("1,2", 3);
        checkResult("7,2", 9);
    })

    describe('new-line-seperator', () => {
        checkResult("1\n4", 5);
        checkResult("4\n2\n3\n4\n5", 18);
    })

    describe('mixing-comma-inline-seperator', () => {
        checkResult("3\n2,3\n4,5", 17);
    })

    describe('custom separator', () => {
        checkResult("//;\n1;2", 3);
    });

    describe('negative numbers are not allowed', () => {
        var caught = null;
    
        beforeEach(() => {
          try {
            StringCalculator.add("-1");
          } catch (ex) {
            caught = ex; 
          }
        });
    
        it('should throw an exception', () => {
          expect(caught).toBeTruthy(); 
        });
    
        it('should contain the correct error message', () => {
          expect(caught.message).toBe("Negative numbers are not allowed: -1");
        });
      });

})