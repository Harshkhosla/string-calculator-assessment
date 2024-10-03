const StringCalculator = {
    add: function (expression) {
        if (expression === "") return 0;

        const pieces = expression.split(/,|\n/g);
        return this.calculateSum(pieces);
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
