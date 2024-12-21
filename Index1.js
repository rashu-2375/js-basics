let person = {
    name : 'Mosh',
    age: 30
};

// dot Notation
person.name = 'John'; 

// bracket notation
person['name'] = 'Mary'; 
console.log(person.name); 

let selectedColors = ['red', 'blue'];
console.log(selectedColors); 

//  performing a task
function greet(name) {
    console.log('Hello' + name);

}
greet('john');

// calculating a value
function square(number){
    return number * number;

}
let number = square(2);
console.log(number);
