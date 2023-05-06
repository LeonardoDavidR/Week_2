export class Person {

        public name : string
        public age : number
        private address : string

    

    constructor(name: string , age : number , address : string){
        this.name = name;
        this.age = age ;
        this.address = address;
          
        }
        public printName(){
            return this.name
        }
        public yearOfBirth(currentYear : number){
            return currentYear - this.age
        }
        public setAddress(address : string){
            return this.address = address;
        }
        public getAddres() : string{
            return this.address;
        }
}





