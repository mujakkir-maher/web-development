function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log('data', dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}

// this is callback hell. eto nesting vai, puratai confused!!!
getData(1, () => {
    getData(2, () => {
        getData(3);
    });
});
