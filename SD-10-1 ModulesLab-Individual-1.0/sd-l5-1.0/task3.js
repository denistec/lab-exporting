
export class ageCalculator { 
    constructor (year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
    returnAge(){
        const currentYear = 2025;
        let currentAge = (currentYear - this.year);
        let age = currentAge - this.year;
        if (this.year = 2000)
            console.log("Successful");
            else {
                console.log(console.log("Unsuccessful"));
                
            }
        }
    }
    
let ageFriend1 = new ageCalculator (2000, 12, 25);
console.log(ageFriend1.returnAge());

 