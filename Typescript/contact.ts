import { Person } from "./Person";

export class Contacts{
    public people : Array<any>;

    constructor (){
            this.people = []
    }
    printCalendar(){
        console.log(this.people)
    }


}
