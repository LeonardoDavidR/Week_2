export class Book{
    private title : string 
    private nPages : number
    private isbn : string 
    private author : string 
    private editorial : string
    constructor(title : string , nPages : number , isbn : string , author : string,
        editorial : string){
            this.title = title;
            this.nPages = nPages;
            this.isbn = isbn;
            this.author = author;
            this.editorial = editorial;

    }
    public getTitle(): string{
        return this.title;
    }
    public getNPages() : number{
        return this.nPages
    }
    public getISBN() : string{
        return this.isbn;
    }
    public getAuthor() : string{
        return this.author
    }
    public getEditorial() : string {
        return this.editorial;
    }
    public setTitle(newTitle : string) {
        return this.title = newTitle;
    } 
    public setNPages(newNPages : number) {
        return this.nPages = newNPages;
    }
    public setISBN(newISBN : string){
        return  this.isbn = newISBN;
    }
    public setAuthor(newAuthor : string){
        return this.author = newAuthor;
    }
    public setEditorial(newEditorial : string) {
        return this.editorial = newEditorial;
    }
    public printAll(){
        return `title : ${this.title},${"\n"} Number of pages : ${this.nPages},
        ${"\n"}ISBN : ${this.isbn},${"\n"}Author : ${this.author},${"\n"}Editorial : ${this.editorial} `
    }
}

let metro : Book = new Book("Metro 2033" , 400 , "978-0-575-08625-8" ,
 "Dmitry Glukhovsky" , "Eksmo");