/*for (let count = 1; count <= 9; count++){
    console.log("Rashmi");
}
console.log("loop has ended");*/

//calculate sum of 1 to 100
/*let sum = 0;
let n = 100; 
for (let i = 1; i<=n; i++ ){
    sum = sum + i;
}
console.log("sum=", sum);*/

//for (let i = 1; i>= 0; i++)   stopping condition is always true so infinite times loops will run


//While loop
/*let i =20;
while (i<= 10){
    console.log(i)
    i++;
}*/ 

//do while loop
/*let i =1;  
do{    
    console.log("i=",i) 
    i++;
}
while (i<= 5);
   */ 

// for-of loop
/*let str = "rashimi"; 
let size = 0; 
for (let i of str){
    console.log("i=", i)
    size++;
}
console.log("string size=", size);*/

// for in loop
let student = { 
    name: "Golu", 
    age : 12,
    cgpa : 7.5,
    isPass :true

};
for (let key in student){ 
    console.log("key=", key, "value=", student[key]); 
}



