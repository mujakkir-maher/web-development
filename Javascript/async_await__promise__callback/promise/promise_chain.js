function asyncfunc_1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data_1");
            resolve("success");
        }, 4000);
    });
}

function asyncfunc_2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data_2");
            resolve("success");
        }, 4000);
    });
}

// console.log("fetching data_1.............");
// let p1 = asyncfunc_1();
// p1.then((res) => {
//     console.log("fetching data 2.............");
//     let p2 = asyncfunc_2();
//     p2.then((res) => {

//     });
// });

console.log ("fetching data_1.............");
asyncfunc_1().then((res) => {
    console.log ("fetching data 2.............");
        asyncfunc_2().then((res) => {
    });
});