/*Arjun wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 10% if the bill value is between 50 and 300. If the value is different, the tip is 15%.
Your tasks:
Calculate the tip, depending on the bill value.
Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example:
“The bill was Rs. 200, the tip was Rs. 20, and the total is Rs. 220”

Test data:
Test for bill values 275, 40 and 430*/

function tip(bill){
    if (50 <= bill && bill <= 300){
        return bill * 0.1;
    }

    else{
        return bill * 0.15;
    }
}

console.log(`The bill is 275, the tip is ${tip(275)} and the total is ${tip(275) + 275}`);
console.log(`The bill is 40 and the tip is ${tip(40)} and the total is ${tip(40) + 40}`);
console.log(`The bill is 220 and the tip is ${tip(220)} and the total is ${tip(220) + 220}`);