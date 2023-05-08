export class Vector {
    private elements : number[];
    public n : number;
    public k : number 
    
    constructor(n : number , k : number){
        // this.n = n
        // this.k = k
        this.elements = []; 
            for(let i = 0 ; i < n ; i++){
                this.elements.push(~~(Math.random() * k ))
            }
    }
            

    public print() {
        console.log(this.elements)
    }
    public add(v1 : Vector) : Vector{
        
        let v : Vector  = new Vector(this.elements.length, 0)
        for (let i = 0; i < this.elements.length; i++){
            v.elements[i] = this.elements[i]+v1.elements[i]
        }
        return v
    }
    public subs(v1 : Vector) : Vector{
        
        let v : Vector = new Vector(this.elements.length , 0)
        for(let i= 0; i < this.elements.length ; i++){
            v.elements[i] = this.elements[i]+v1.elements[i]
        }
        return v;
    }
    public mult(v1 : Vector) : Vector{
        
        let v : Vector = new Vector(this.elements.length, 0)
        for(let i= 0; i < this.elements.length ; i++){
            v.elements[i]= this.elements[i]+v1.elements[i]
            
        }
        return v;

    }
    public multNumb(n : number) : Vector{
        
        let v : Vector = new Vector(this.elements.length , 0)
        for(let i = 0 ; i < this.elements.length ; i++){
            v.elements[i] = this.elements[i]*n
        }
        return v;
    }
}

