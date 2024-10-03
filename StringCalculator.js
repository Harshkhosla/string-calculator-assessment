const StringCalculator = {
    add: (expression) => {
      if (expression === "") return 0;
  
       const pieces= expression.split(/,|\n/g);
       let sum = 0;
       
       for(let i = 0 ;i<pieces.length;i++){
        sum += parseInt(pieces[i]) || 0;
       }
       return sum ;
    }
  };
  
  module.exports = StringCalculator;
  