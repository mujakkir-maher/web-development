var num1 = 2;
function sum(){
    var num2 = 3;
    num3 = 6; // ekhane var, let, const kichu lekha hoy ni. js non-strict mode e dhore ney eta ekta global variable
    // sejonno etar output ami baire thekeo access korte parbo
    return function(){
        return num2;
    };
}
const myFunc = sum();
console.log(myFunc());
