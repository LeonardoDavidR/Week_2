export class Person {
    constructor(public name : string , public age : number , 
        private address : string){
            this.address = address 
            this.name = name 
            this.age = age
        }
        public printName(){
            return this.name
        }
        public yearOfBirth(currentYear : number){
            return currentYear - this.age
        }
        public setAddress(address : string){
            return this.address;
        }
        public getAddres() : string{
            return this.address;
        }
}





