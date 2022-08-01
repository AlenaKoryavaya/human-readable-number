module.exports = function toReadable(numb) {
    const single = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const double = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    if(numb <= 9) {
        return single[numb];
    }

    if(numb >= 10 && numb <= 19) {
        return double[numb % 10];
    }

    if(numb >= 20 && numb <= 99) {
        if(Number.isInteger(numb/10)) {
            return tens[numb/10]; 
        } else {
            let arrOfNumb = ("" + numb).split("");
            return `${tens[arrOfNumb[0]]} ${single[arrOfNumb[1]]}`;
        };
    }

    if(numb >= 100 && numb <= 999) {
        if(Number.isInteger(numb/100)) {
            return `${single[numb/100]} hundred`; 
        } 
        
        if(!Number.isInteger(numb/100))  {
            let arrOfNumb = ("" + numb).split("");
            
            if(arrOfNumb[1] == 0) {
              return `${single[arrOfNumb[0]]} hundred ${single[arrOfNumb[2]]}`;
            } else if (arrOfNumb[1] == 1) {
                return `${single[arrOfNumb[0]]} hundred ${double[arrOfNumb[2]]}`;
            } else if ((arrOfNumb[2] == 0)) {
                return `${single[arrOfNumb[0]]} hundred ${tens[arrOfNumb[1]]}`;
            } else {
                return `${single[arrOfNumb[0]]} hundred ${tens[arrOfNumb[1]]} ${single[arrOfNumb[2]]}`
            }
          };
    };
};
