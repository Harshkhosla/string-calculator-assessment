const StringCalculator = {
    add: function (expression) {
          const pieces = this.getPieces(expression);
        return this.calculateSum(pieces);
    },
    getPieces: function (expression) {
      let delimiters = [",", "\n"];  

      return this.getSubPieces([expression], delimiters); 
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
        let sum = 0;
        for (let i = 0; i < pieces.length; i++) {
            sum += parseInt(pieces[i]) || 0;
        }
        return sum;
    },
    
};

module.exports = StringCalculator;
