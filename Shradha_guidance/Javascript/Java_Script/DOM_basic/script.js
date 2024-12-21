// let h2=document.querySelector("h2");
// console.dir(h2.innerText);

let divs = document.querySelectorAll(".box");
// console.log(divs)

let idx = 1;
for (div of divs){
    div.innerText = `new  munni ${idx}`;
    idx++;
    // console.log(div.innerText);
}
// divs[0].innerText = "Muuni 1";
// divs[1].innerText = "Muuni 2";
// divs[2].innerText = "Muuni 3";