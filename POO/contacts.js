class Contacts{
    constructor(){
            this.arrPerson = [new myPer.Person()] 
        // this.heigth = new myPer.Person().heigth;
        // this.weigth = new Person().weigth;
    }

    printPerson(){
        return this.arrPerson
    }
}


let myPer = require("./Person")
module.exports = {Contacts}