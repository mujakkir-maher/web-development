const employee = {
    calcTax() {
        console.log('tax is 10%');
    },
};

const maher = () => {
    50000;
};

maher.__proto__ = employee;
maher.calcTax();
