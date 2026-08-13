function acyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('some data_1');
            resolve('success');
        }, 4000);
    });
}

console.log('fetching data......');
const p1 = acyncFunc();
p1.then((res) => {
    console.log(res);
});
