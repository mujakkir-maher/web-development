const name = 'Maher';
const age = 23;

function greet(user, userAge) {
    if (userAge >= 18) {
        return `Hello, ${user}! You are ${userAge} years old.`;
    }
    return `Hello, ${user}!`;
}
console.log(greet(name, age));
setTimeout(() => {
    console.log('test');
}, 4000);
