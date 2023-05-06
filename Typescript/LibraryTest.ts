import { Book } from "./Book";
import { Library } from "./Library";


let newRBook : Book = new Book ("El silencio de los corderos" , 300, "12343245-JK283143", "Jose", 
"Panini");
let newBook : Book = new Book ("Introduccion a Javascript" , 233 , "2344433-BC23333" , 
"Joseph Smith", "Now Editions.......”")
let newBook1 : Book = new Book ("Gracias", 199 , "81234713k12313", "Jose", "Altaluz")
let library : Library = new Library([newBook, newRBook, newBook1], "calle Santo Angel" , "Codenotch" );

// console.log(library)
console.log(library.toString())
