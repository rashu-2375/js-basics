/* function myFunction(){
    console.log("Munni"); 
}
myFunction(); 
myFunction();


//
function sum(x,y){
    s = x + y;
    return s;
    
}
let val = sum(3,4);
console.log(val); */

//Arrow function
const arrowSum = (a, b) => {
  //console.log(a+b);
  return a * b;
};

const printHello = () => {
  console.log("hello");
};

// Vowels count
function countVowels(str) {
  //"MunnaBhai" , count = 4
  let count = 0;
  for (const char of str) {
    //console.log(char);
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    )
      count++;
  }
  //console.log(count);
  return count;
}

//arrow se karo
const countVow = (str) => {
    let count=0;
    for (const char of str){
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
          )
            count++;

    }
    return count;
}

function myFunction() {
    alert("Hello World!");
  }
myFunction()
myFunction()