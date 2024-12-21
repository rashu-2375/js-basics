/*let marks = [85, 75, 45, 98]
//console.log(marks);
console.log(marks.length); // property
for (let idx = 0; idx < marks.length; idx++){
    console.log("idx = ",marks[idx]);
}

// for of
for (let i of marks){
    console.log(i);
}  */


/*let mark = [85, 75, 45, 98];
let sum = 0;
for (let val of mark){
    sum += val;

}
let avg = sum/ mark.length;
console.log(`avg marks of the class  = ${avg}`); */


// offer waliiQuestion
/* let items = [250, 645, 300]
let i =0;
for (let val of items){
    console.log(`value at index ${i} = ${val}`);
    let offer = val / 10
    items[i] = items[i] - offer;
    console.log(`value after offer = ${items[i]}`);
    i++;
} */

// wayII
/* let items = [250, 645, 300]
for (let i= 0; i< items.length; i++){
    let offer = items[i] / 10;
    items[i] -= offer;
}
console.log(items); */

// let foodItems = ["Kaju", "banana", "Chips"];
// foodItems.push("paneer", "cheese");
// console.log(foodItems);
// console.log(foodItems.toString());


// let cM = [87, 98, 56, 24]
// let food = ["roti", "dal"]
// let veg = ['eggroll', "masaldosa"]
// let all = cM.concat(food, veg);
// console.log(all);



let veg = ['eggroll', "masaldosa"];
veg.unshift('puri');  // puri start me add hoga
let val = veg.shift();  // first item delete huii
// console.log(`deleted ${val}`)


// splice method ...change original array
let arr = [1,2,3,4,5,6,7]
//arr.splice(2,2,52,58);

//Add element
//arr.splice(2,0,101);

//delete element
//arr.splice(3,1);

//Replace element
//arr.splice(3,1,101);


//HoTS Questions
let companies = ["youtube", "Microsoft", "Uber", "google"," IBM", "Netflix"]
companies.shift();
companies.splice(2,0,"ola");
console.log(companies);
companies.push("amazon")


