class Contacts{
    constructor(){
            this.arrPerson = [] 
        // this.heigth = new myPer.Person().heigth;
        // this.weigth = new Person().weigth;
    }

    printPerson(){
        return this.arrPerson
    }
}


let myPer = require("./Person")
module.exports = {Contacts}