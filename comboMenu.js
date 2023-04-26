const readLine = require('readline-sync');

//To Do:
//Make Drinks Function
// Make different size options
// Ask for Ice maybe????
//
//Make Fries Function
// Size options
// Upgrading Order option
// Maybe have different toppings or fry toppings idk
//
//Make Working Tax Cal
//
//Make the receipt
// Make it look *fancy* and neat

let Order=[];
let Cost=[];

//Sandwich order
let SandwichType = readLine.question(`Please select from one of three types of sandwiches:\n
1. Chicken $5.25 | 2. Beef $6.25 | 3. Tofu $5.75\n
Sandwich Number: `);

//Got the thing to do the thing when it isn't a valid option :)
while (SandwichType !== '1' ){
    console.log('!ERROR!');
    SandwichType = readLine.question(`Please select from one of three types of sandwiches:\n
1. Chicken $5.25 | 2. Beef $6.25 | 3. Tofu $5.75\n
Sandwich Number: `);
}
if (SandwichType === '1'){
    console.log('Chicken');
    Order.push('Chicken');
    Cost.push(5.25);
} else if (SandwichType === '2'){
    console.log('Beef');
    Order.push('Beef');
    Cost.push(6.25);
}else if(SandwichType === '3'){
    console.log('Tofu');
    Order.push('Tofu');
    Cost.push(5.75);
}

console.log(Order);
console.log(Cost)

//Drink

//Fries

//Tax Season

//Printing

// //Loading Bars and text from https://www.symbolcopy.com/aesthetic-decoration.html
// console.log(`
// ╔═══════════════════════════╗\n
// ║  Thank you for ordering!  ║\n
// ║                           ║\n
// ║  Please check bellow for  ║\n
// ║  your receipt to take to  ║\n
// ║ counter! Have a good day! ║\n
// ╚═══════════════════════════╝`); //Order Complete