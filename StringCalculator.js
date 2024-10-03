const StringCalculator = {
    add: function (expression) {
          const pieces = this.getPieces(expression);
          this.checkValidity(pieces);
        return this.calculateSum(pieces);
    },
    checkValidity: function (pieces) {
        var negatives = [];
    
        for (var i = 0; i < pieces.length; i++) {
          if (parseInt(pieces[i]) < 0) {
            negatives.push(pieces[i]); 
          }
        }    
        if (negatives.length) {
          throw "Negative numbers are not allowed: " + negatives.join(", ");
        }
    },
    getPieces: function (expression) {
      let delimiters = [",", "\n"];  
      if (this.hasCustomDelimiter(expression)) {
        delimiters = delimiters.concat(this.getCustomDelimiters(expression));
        expression = this.stripFirstLine(expression);
      }
    //   return this.getSubPieces([expression], delimiters); 
    var pieces = this.getSubPieces([expression], delimiters); 
    var pieceValues = [];
    for (var i = 0; i < pieces.length; i++) {
      pieceValues.push(parseInt(pieces[i])); 
    }

    return pieceValues;
    },
    getCustomDelimiters: function (expression) {
        var delimiters = [];
        var delimiterPart = expression.split("\n")[0];
        var matches = delimiterPart.match(/\[(.*?)\]/g);
        
        if (matches) {
          matches.forEach(match => {
            delimiters.push(match.slice(1, -1)); 
          });
        } else {
          delimiters.push(delimiterPart.slice(2));
        }
    
        return delimiters;
      },

      stripFirstLine: function (expression) {
        return expression.split("\n").slice(1).join("\n"); 
      },

    getSubPieces: function (piecesSoFar, delimiters) {
      if (delimiters.length === 0) {
        return piecesSoFar;
      }
  
      const subPieces = [];
      const delimiter = delimiters.pop();  
      
      for (let i = 0; i < piecesSoFar.length; i++) {
        subPieces.push(...piecesSoFar[i].split(delimiter));
      }
      return this.getSubPieces(subPieces, delimiters);
    },

    calculateSum: function (pieces) {
        var sum = 0;
    
        for (var i = 0; i < pieces.length; i++) {
          if (parseInt(pieces[i]) <= 1000) { 
            sum += parseInt(pieces[i]) || 0; 
          }
        }
        return sum;
      },

    hasCustomDelimiter: function (expression) {
        return expression.startsWith("//");
      }
      
};

module.exports = StringCalculator;
