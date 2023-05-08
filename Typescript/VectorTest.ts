import { Vector } from "./Vector"

let v = new Vector(5,5)
let v2 = new Vector(5,5)
v.print()
console.log(v)
console.log(v2)


console.log(v.add(v2))
console.log(v.mult(v2));
console.log(v.multNumb(5))
console.log(v.subs(v2))