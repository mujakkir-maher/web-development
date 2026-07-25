const employee = {
    calcTax() {
        console.log("tax is 10%");
    }
};

const maher = () => {
    salary : 50000;
};

maher.__proto__ = employee;
maher.calcTax();