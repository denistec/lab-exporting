
export class ageCalculator { 
    constructor (name, year, month, day) {
        this.name = name;
        this.year = year;
        this.month = month;
        this.day = day;
    }
    returnAge(){
        const currentYear = 2025;
        let currentAge = (currentYear - this.year);
        return (`${this.name} is ${currentAge}`)
    }
}
let ageFriend1 = new ageCalculator ("Karim", 2001, 12, 3);
let ageFriend2 = new ageCalculator ("Uli", 1998, 12, 3);
let ageFriend3 = new ageCalculator ("Georgina", 2001, 12, 3);

console.log(ageFriend1.returnAge());
console.log(ageFriend2.returnAge());
console.log(ageFriend3.returnAge());
