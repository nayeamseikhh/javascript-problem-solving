let numbers = [45, 65,78, 12, 12,45, 65, 3, 54, 65];
let uniquenumbers = [];
for ( let i=0; i<numbers.length; i++){
let element = numbers [i];
let index = uniquenumbers.indexOf(element);
if(index == -1){
    uniquenumbers.push(element);
}
}
console.log(uniquenumbers)