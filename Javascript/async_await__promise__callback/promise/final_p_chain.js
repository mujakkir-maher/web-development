function getData(dataID){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data : ", dataID);
            resolve("success");
        }, 2000);
    });
}

// actual promise chain 
getData(1)
    .then((res) => {
        return getData(2);
    })
    .then((res) => {
        return getData(3);
    })
    .then((res) => {
        console.log(res);
    });