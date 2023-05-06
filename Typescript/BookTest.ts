import { Book } from "./Book";

let crepusculo : Book = new Book("Crepusculo", 350 , "9788420469287" , "Stephenie Meyer" , "Alfaguara")

// console.log(crepusculo);
// console.log(crepusculo.getAuthor());
// console.log(crepusculo.getEditorial());
// console.log(crepusculo.getISBN());
// console.log(crepusculo.getNPages());
// console.log(crepusculo.getTitle());
// console.log(crepusculo.printAll());
console.log(crepusculo.setAuthor("Mike Morales"));
console.log(crepusculo.setEditorial("Panini"));
console.log(crepusculo.setISBN("241834"));
console.log(crepusculo.setNPages(20));
console.log(crepusculo.setTitle("Realmente soy carlos"))