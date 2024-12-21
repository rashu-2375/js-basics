//let arr = [1,2,3,4,5]
// arr.forEach(function printVal(val){
//     console.log(val);
// })
let city = ['pune', "delhi",'mumbai']
city.forEach((val,idx, city) => {
    console.log(val.toUpperCase(), idx, city);
})

let nums = [2,6,8]
nums.forEach((num) =>{
    console.log(num*num);
})

let calSquare = (num) => {
    console.log(num*num);
}
nums.forEach(calSquare); 


//map
let lst = [6,8,9] 
// lst.map((val) => { 
//     console.log(val); 
// })

let newArr = lst.map((val) =>{
    return val*val; 
});
console.log(newArr); 
