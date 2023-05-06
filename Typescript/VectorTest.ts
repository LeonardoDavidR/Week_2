import { Vector } from "./Vector"

let v = new Vector(5,5)
let v2 = [1, 3 , 5 , 7 , 9]
console.log(v.print())
console.log(v.add(v2))
console.log(v.mult(v2));
console.log(v.multNumb(5))
console.log(v.subs(v2))