import { Contacts } from "./contact";
import { Person } from "./Person";

let carlos = new Person ("Carlos" , 18 , "calle pepito grillo 24");
let alba = new Person ("Alba", 27 , "Calle casa de campo");
let teressa = new Person("Teresa", 26, "calle lindo perrito");
let pandilla = new Contacts();
pandilla.people = [carlos , alba , teressa ]