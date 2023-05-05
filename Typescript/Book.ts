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
    public setTitle() :void{
        this.title = "" 
    } 
    public setNPages() :void{
        this.nPages;
    }
    public setISBN():void{
        this.isbn;
    }
    public setAuthor():void {
        this.author;
    }
    public setEditorial() : void {
        this.editorial;
    }
    public printAll(){
        return `title : ${this.title},${"/n"} Number of pages : ${this.nPages},
        ${"/n"}ISBN : ${this.isbn},${"/n"}Author : ${this.author},${"/n"}Editorial : ${this.editorial} `
    }
}