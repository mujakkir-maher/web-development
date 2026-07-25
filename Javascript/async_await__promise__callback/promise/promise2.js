const getPromise = () => {
   return new Promise((resolve, reject) => {
        console.log("I am a promise");
        //resolve("success");
         reject("network error");
    });
};

let promise = getPromise();
//if promise ekbar resolve hoye jay tokhon amra .then use korte pari
promise.then((res) => {
    console.log("promise fullfilled", res);
});

promise.catch((err) => {
    console.log("rejected");
});
