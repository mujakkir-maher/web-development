const School = require('./school') // file name
const school = new School();

school.on('bellRing', (period) => {
    console.log(`we need to run because ${period}`);  
});

school.startPeriod();