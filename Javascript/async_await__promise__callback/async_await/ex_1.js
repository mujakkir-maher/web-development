function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data : ", dataId);
            resolve("success");
        }, 2000);
    });
}

async function getAllData(){
    console.log("getting data_1..........");
    await getData(1);
    console.log("getting data_2..........");
    await getData(2);
    console.log("getting data_3..........");
    await getData(3);
    console.log("getting data_4..........");
    await getData(4);
}

getAllData();