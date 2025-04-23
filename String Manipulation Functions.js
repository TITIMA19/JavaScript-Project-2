 //Reverse a String
 let character = "hello world";
let reversed= "";
function reversedastring(){
    for (let i = character.length-1 ; i >= 0;i--) {
        reversed += character[i];
    }
    
}
reversedastring()
console.log(reversed);
//Count Characters
var count = 0
function CountCharacters(){
    for (var i = 0; i < character.length-1; i++) {

        count++;
    
    }
}
CountCharacters()
console.log(count);

//Capitalize Words
function capitalizechar(phrase) {
    let arr = phrase.split(' ');
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        let maj = word.charAt(0).toUpperCase() + word.slice(1);
        arr2.push(maj);
    }
    return arr2.join(' ');
}


