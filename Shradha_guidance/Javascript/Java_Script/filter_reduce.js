let arr = [4,6, 7,70,8, 9, 5];
let evenarr = arr.filter((val) => {
    return val % 2 === 0;
})
console.log(evenarr)

// sum
let arr1 =[2, 4, 5]
const out = arr1.reduce((res, curr) => {
    return res + curr;
})
console.log(out)

// largest
let arr2 = [5,7, 90, 54, 9, 65]
const larg = arr2.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
})
console.log(larg)

// filtering on the based of marks
let marks = [65, 89, 90, 45, 98, 96]
let topper = marks.filter((val) => {
    return val > 90;
})
console.log(topper)

//
let n = prompt("Enter a number")
let arr3 = []
for(let i = 1; i<=n; i++){
    arr3[i-1] = i

}console.log(arr3)

let sum= arr3.reduce((res,  curr) => {
    return res + curr
});console.log("sum=", sum)
