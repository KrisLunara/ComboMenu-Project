const readLine = require('readline-sync');

//To Do:
//Drinks
// Ask for Ice maybe????
//
//Make Fries
//Ask for ketchup if fries are selected
//
// Upgrading Order option
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
while (SandwichType !== '1' && SandwichType !== '2' && SandwichType !== '3'){
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
}else{
    console.log('This is a line to indicate an error has occurred.' +
        '\nPlease restart your order and try again.\nIf you continue seeing this message, please contact Molly' +
        'or Mallory from tech support.');
}

console.log(Order);
console.log(Cost);

//Drink
let Drink = readLine.question('Would you like a drink?\n(Y/N): ');
while(Drink !=='Y' && Drink !== 'y' && Drink !== 'N' && Drink !== 'n'){
    console.log('Please select a valid option.');
    Drink = readLine.question('Would you like a drink?\n(Y/N): ');
}
if (Drink === 'Y' || Drink === "y" ){
    let DrinkSize = readLine.question('Please select a drink size' +
        '\n1. Small $1.00 | 2. Medium $1.50 | 3. Large $2.00 | 4. Cancel\nSize Number: ');

    if (DrinkSize === '1'){
        console.log('Small Drink');
        Order.push('Small Drink');
        Cost.push(1.00);
    }else if(DrinkSize === '2'){
        console.log('Medium Drink');
        Order.push('Medium Drink');
        Cost.push(1.50);
    }else if(DrinkSize === '3'){
        console.log('Large Drink');
        Order.push('Large Drink');
        Cost.push(2.00);
    }else if(DrinkSize === '4'){
        console.log('No Drink');
        Order.push('No Drink');
        Cost.push(0.00);
    }else if(DrinkSize !=='1' && DrinkSize !== '2' && DrinkSize !== '3 '&& DrinkSize !== '4'){
        while(DrinkSize !=='1' && DrinkSize !== '2' && DrinkSize !== '3 '&& DrinkSize !== '4'){
            console.log('Please select a size.');
            Drink = readLine.question('1. Small $1.00 | 2. Medium $1.50 | 3. Large $2.00 | 4. Cancel\nSize Number: ');
        }
    }else{
        console.log('This is a line to indicate an error has occurred.' +
            '\nPlease restart your order and try again.\nIf you continue seeing this message, please contact Molly' +
            'or Mallory from tech support.');
    }
}
if(Drink === 'N' || Drink === 'n'){
    console.log('No Drink');
    Order.push('No Drink');
    Cost.push(0.00);
}

console.log(Order);
console.log(Cost)

//Fries
let Fry = readLine.question('Would you like fries?\n(Y/N): ');
while(Fry !=='Y' && Drink !== 'y' && Drink !== 'N' && Drink !== 'n'){
    console.log('Please select a valid option.');
    Drink = readLine.question('Would you like fries?\n(Y/N): ');
}
if (Fry === 'Y' || Fry === "y" ){
    let FrySize = readLine.question('Please select a fry size' +
        '\n1. Small $1.00 | 2. Medium $1.50 | 3. Large $2.00 | 4. Cancel\nSize Number: ');

    if (FrySize === '1'){
        console.log('Small Fries');
        Order.push('Small Fries');
        Cost.push(1.00);
    }else if(FrySize === '2'){
        console.log('Medium Fries');
        Order.push('Medium Fries');
        Cost.push(1.50);
    }else if(FrySize === '3'){
        console.log('Large Fries');
        Order.push('Large Fries');
        Cost.push(2.00);
    }else if(FrySize === '4'){
        console.log('No fries');
        Order.push('No Fries');
        Cost.push(0.00);
    }else if(FrySize !=='1' && Drink !== '2' && FrySize !== '3 '&& FrySize !== '4'){
        while(FrySize !=='1' && FrySize !== '2' && FrySize !== '3 '&& FrySize !== '4'){
            console.log('Please select a size.');
            Drink = readLine.question('1. Small $1.00 | 2. Medium $1.50 | 3. Large $2.00 | 4. Cancel\nSize Number: ');
        }
    }else{
        console.log('This is a line to indicate an error has occurred.' +
            '\nPlease restart your order and try again.\nIf you continue seeing this message, please contact Molly' +
            'or Mallory from tech support.');
    }
}
if(Fry === 'N' || Fry === 'n'){
    console.log('No Drink');
    Order.push('No Drink');
    Cost.push(0.00);
}

console.log(Order);
console.log(Cost)

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


//Credits and Help

//Created by Kris Martinez (https://github.com/KrisLunara)
//Do not use or modify without permission
//
//This program has been made with the help of Molly from the Rubber Duck Tech Support Dept.