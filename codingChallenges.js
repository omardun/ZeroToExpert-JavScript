// // basic operators
// console.log(population / 2)
// population++;
// console.log(population);
// console.log(population >= finland);

// coding challenge #1

// const marksHeight = 1.69
// const marksMass = 78

// const johnsHeight = 1.95
// const johnsMass = 92
// const marksHeight = 1.88
// const marksMass = 95

// const johnsHeight = 1.76
// const johnsMass = 85

// const BMIMark = marksMass / marksHeight **2
// const BMIJohn = johnsMass / (johnsHeight * johnsHeight)
// console.log(BMIMark, BMIJohn);

// coding challenge #2
// if(BMIMark > BMIJohn) {
// console.log(`Marks BMI is higher then johns`);
// } else {
//     console.log(`Johns BMI is higher then marks`);
// }

// console.log(`Johns BMI (${BMIJohn}) is higher then Marks BMI (${BMIMark}) `)


//coding challenge #3
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if(scoreDolphins > scoreKoalas) {
//     console.log(`Dolphins win trophy with a score of ${scoreDolphins}`);
// } else if (scoreKoalas > scoreDolphins) {
//     console.log(`Koalas win trophy with a score of ${scoreKoalas}`);
// } else if (scoreDolphins === scoreKoalas) {
//     console.log(`Both teams win the trophy`);
// }

//Bonus 1
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if(scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log(`Dolphins win trophy with a score of ${scoreDolphins}`);
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log(`Koalas win trophy with a score of ${scoreKoalas}`);
// } else if (scoreDolphins === scoreKoalas) {
//     console.log(`Both teams win the trophy`);
// }

//Bonus 2
// const scoreDolphins = (97 + 112 + 80) / 3;
// const scoreKoalas = (109 + 95 + 50) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if(scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log(`Dolphins win trophy with a score of ${scoreDolphins}`);
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100 ) {
//     console.log(`Koalas win trophy with a score of ${scoreKoalas}`);
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//     console.log(`Both teams win the trophy`);
// } else {
//     console.log('No one wins the trophy!');
// }

// console.log(scoreDolphins, scoreKoalas);

//coding challenge #4
// let tip;
// const bill = 180
// tip = bill / 15;
// let value = bill + tip

// bill <= 300 ? console.log(`The bill was ${bill} the tip was ${tip} and the total value is ${value}`) : console.log(`tip 20%`);

// const bill = 275;
// const tip = bill <= 300 && bill >= 50 ? bill * .15 : bill * 0.2;
// console.log(`The bill was ${bill} , the tip was ${tip} and the total value was ${bill + tip}`);


// // coding challenge #1 functions
// const calcAverage  = (a,b,c) => (a + b + c) / 3;
// // console.log(calcAverage(3,4,5));

// //test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// // console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function(avgDolphins, avgKoalas) {
//     if(avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win trophy (${avgDolphins} vs ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins){
//         console.log(`Koalas win trophy (${avgKoalas} vs ${avgDolphins})`);
//     } else {
//         console.log('no team wins');
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);
// // checkWinner(576, 112);

// //test 2
//  scoreDolphins = calcAverage(85, 54, 41);
//  scoreKoalas = calcAverage(23, 34, 27);
//  console.log(scoreDolphins, scoreKoalas);
//  checkWinner(scoreDolphins, scoreKoalas);

//coding challenge #2 Arrays
// const calcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// // const calcTip1 = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// const bills = [125, 555, 44];
// const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// const totals = [bills[0] + tip[0] , bills[1] + tip[1], bills[2] + tip[2]]
// console.log(bills, tip, totals);