// need to access
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + "From the developer end"

const divs = document.querySelectorAll('.box');
console.dir(divs);
// divs[0].innerText = "unique 1";
// divs[1].innerText = "unique 2";
// divs[2].innerText = "unique 3";
let idx = 1;
for (div of divs) {
    div.innerText = `unique box and the operation ${idx}`;
    idx++;
}
