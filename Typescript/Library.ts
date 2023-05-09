import { Book } from "./Book";

export class Library {
    private books : Book[];
    private address : string;
    private manager : string;
   
    
    constructor(books : Book[] , address : string , manager : string){
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
    public setAddress(newAddress : string) : void{
         this.address = newAddress;
    }
    public setManager(newManager : string) : void{
         this.address = newManager
    }
    public toString() : string{
        let i : number = 0
        let x : string = ""
        for(i = 0; i < this.books.length; i++){
            x = x+"Book"+i + ": \n" + this.books[i].toString()
        }
        return x 
    }
    public getNumberOfBooks(): number{
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




