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
        let i : number = 0
        let x : string = ""
        for(i = 0; i < this.books.length; i++){
            x = x+"Book"+i + ": \n" + this.books[i].printAll()
        }
        return x 
    }
    public getNumberOfBooks(books : number){
        return this.books.length;
    }
    public findByAuthor(author : string) : Book[]{
      let i : number = 0 
      let authorFil : Book[] = [];
      for(i = 0 ; i < this.books.length ;  i++){
        if(this.books[i].getAuthor() == author){
            authorFil.push(this.books[i])
        }
      }
      return authorFil
    }

}



