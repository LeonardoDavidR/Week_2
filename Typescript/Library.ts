import { Book } from "./Book";

export class Library {
    private books : Array<any>;
    private address : string;
    private manager : string;

    constructor(books : Array<any> , address : string , manager : string){
        this.books = books
        this.address = address
        this.manager = manager

    }

    public getAddress() : string{
        return this.address
    }
    public getManager() : string{
        return this.manager
    }
    public setAddress(newAddress : string) : string{
        return this.address = newAddress;
    }
    public setManager(newManager : string) : string{
        return this.address = newManager
    }
    public toString() : string{
        return `Book : ${this.books},${"\n"}Manager : ${this.manager} `
    }
    public getNumberOfBooks(books : number){
        return this.books;
    }
    public findByAuthor(author : string): Book[]{
        return author = this.books
    }

}

let newRBook : Book = new Book ("El silencio de los corderos" , 300, "12343245-JK283143", "Jose", 
"Panini");
let newBook : Book = new Book ("Introduccion a Javascript" , 233 , "2344433-BC23333" , 
"Joseph Smith", "Now Editions.......”")
let library : Library = new Library([], "calle Santo Angel" , "Codenotch" );


