// array er prottek index e giya specific element khuje ber kore

let arr = [1,2,3,4,5,6,7,8,9];
let evenarray = arr.filter((val) => {
    return val % 2 === 0;
});

console.log(evenarray);
