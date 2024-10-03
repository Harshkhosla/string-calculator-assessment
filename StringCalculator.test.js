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

    describe('custom delimiter functionality', () => {
        checkResult("//;\n1;2", 3); 
        checkResult("//|\n1|2|3", 6); 
    });

    describe('multiple custom delimiters are allowed', () => {
        checkResult("//[*][%]\n1*2%3", 6); 
        checkResult("//[***][%%]\n1***2%%3", 6);
      });

    describe('negative numbers are not allowed', () => {
        var caught = null;
    
        beforeEach(() => {
            try {
              StringCalculator.add("-1,-42");
            } catch (ex) {
              caught = ex; 
            }
          });
    
        it('should throw an exception', () => {
          expect(caught).toBeTruthy(); 
        });
    
        it('should include the first invalid negative term in the exception', () => {
            expect(caught.indexOf("-1")).not.toBe(-1); 
          });


        it('should include the second invalid negative term in the exception', () => {
        expect(caught.indexOf("-42")).not.toBe(-1); 
         });
      });

      describe('numbers greater than 1000 are not allowed', () => {
        checkResult("1001,2", 2); 
        checkResult("1000,2", 1002); 
      });

})