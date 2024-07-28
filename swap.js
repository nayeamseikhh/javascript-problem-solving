let a=5;
let b=7;
// console.log("before swap a =",a, "b =",b);
let temp = a;
a=b;
b=temp;
// console.log("after swap a =",a, "b =",b);


let x = 5;
let y = 7;
// console.log("before swap x =",x , "y =",y);
x = x + y;
y = x - y;
x = x - y;
// console.log("after swap x =",x, "y =",y);

let p=5;
let q=7;
[p,q]=[q,p]
// console.log("before swap p =",p, "q =",q);