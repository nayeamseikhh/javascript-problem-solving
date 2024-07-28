// let numbers = [45, 65,78, 12, 3, 54, 65];
// let sum = 0;
// for (let i=0; i<numbers.length; i++){
//     let element = numbers[i];
//     sum = sum + element ;
// }
// console.log("total of the numbers.", sum);

function getArraySum (numbers){
    let sum = 0;
for (let i=0; i<numbers.length; i++){
    let element = numbers[i];
    sum = sum + element ;
}
return sum;
}
let numbers = [45, 65,78, 12, 3, 54, 65];

let result = getArraySum(numbers);
console.log(result)