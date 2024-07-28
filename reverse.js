function revarseString(str){
    let reverse = "";
    for (var i=0; i<str.length; i++){
        let char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
let statement = "Hello Alien Bhai Brother.";
let forAlien = revarseString(statement);
console.log(forAlien);