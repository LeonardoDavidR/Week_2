class Person{
    constructor(weigth, heigth, yearOfBirth, hobbies){
        this.weigth = weigth
        this.heigth = heigth
        this.yearOfBirth = yearOfBirth
        this.colorHair
        this.colorEyes
        this.hobbies = hobbies

    }
    calIMC(){
        return this.weigth/(this.heigth*this.heigth);
    }
    calAge(){
        return currentYear-this.yearOfBirth;
    
    }
    printAll(){
        console.log( `weigth - ${this.weigth},${"\n"}heigth  : ${this.heigth},${"\n"}yearOfBirth - ${this.yearOfBirth},${"\n"}hobbies : ${this.hobbies}`)
    }
    printHobbies(){
        console.log( this.hobbies)
    }
}

// let juan = new Person(70, 1.72, 1997, ["nadar", "correr"]);
// let currentYear = 2023;
// console.log(juan);
// console.log(juan.calIMC(70, 1.72));
// console.log(juan.calAge(1997))
// console.log(juan.printAll())
// console.log(juan.printHobbies())

module.exports = {Person};