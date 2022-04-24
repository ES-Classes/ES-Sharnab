/*Prabin and Ram comparing their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height)

(mass in kg and height in meter).

Your tasks:
Store Prabin's and Ram's mass and height in variables
Calculate both their BMIs using the formula
Create a Boolean variable 'prabinHigherBMI' containing information about whether Prabin has a higher BMI than Ram.
You need to calculate BIM
Test data:
2022 Data: Prabin weights 78 kg and is 1.70 m tall. Ram weights 92 kg and is 1.92 m tall.
2020 Data: Prabin weights 95 kg and is 1.69 m tall. Ram weights 85 kg and is 1.95 m tall.*/

let w1 = 78;
let w2 = 92;
let h1 = 1.70;
let h2 = 1.92;

let bmi1 = w1 / (h1 * h1);
let bmi2 = w2 / (h2 * h2);

if (bmi1 < bmi2)
console.log('Ram has higher BMI');
else
console.log('Prabin has higher BMI');