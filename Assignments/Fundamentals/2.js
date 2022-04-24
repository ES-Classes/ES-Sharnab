/*There are two basketball teams, NepalA and NepalB. They played against each other 3 times. The team with the highest average score wins a trophy.
Your tasks:
Calculate the average score for each team, using the test data below.
Compare the team's average scores to determine the winner of the tournament, and print it to the console. (Can be draw as well)
Include a requirement for a minimum avergae score of 50 points. With this rule, a team only wins if it has a higher score than the other team, and at the same time a score of at least 50 points.
Minimum score rule also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 50 points. Otherwise, no team wins the trophy
Test data:
Test Data 1: NepalA score 46, 58 and 39. NepalB score 48, 41 and 60
Test Data 2: NepalA score 47, 62 and 51. NepalB score 59, 45 and 73
Test Data 3: NepalA score 47, 62 and 51. NepalB score 59, 45 and 56*/

// Dataset
let nepalA = [46, 58, 39, 47, 62, 51, 47, 62, 51];
let nepalB = [48, 41, 60, 59, 45, 73, 59, 45, 56];

// Function to find average of array
function average(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

// Calculating the average of each teams
let nepalAAverage = average(nepalA);
let nepalBAverage = average(nepalB);

console.log(`Average of nepalA is ${nepalAAverage}`);
console.log(`Average of nepalB is ${nepalBAverage}`);

// Finding the best team
if (nepalAAverage > nepalBAverage) {
    console.log(`NepalA is the best team.`);
}
else if (nepalAAverage < nepalBAverage) {
    console.log(`NepalB is the best team.`);
}
else {
    console.log(`Both teams are equally good.`);
}

// Adding 50 as minimum requirements
if (nepalAAverage > nepalBAverage && nepalAAverage >= 50) {
    console.log(`NepalA is the best team.`);
}
else if (nepalBAverage > nepalAAverage && nepalBAverage >= 50) {
    console.log(`NepalB is the best team.`);
}
else if (nepalAAverage == nepalBAverage && nepalAAverage >= 50) {
    console.log(`Both teams are equally good.`);
}
else {
    console.log(`Both teams are not good enough.`);
}
