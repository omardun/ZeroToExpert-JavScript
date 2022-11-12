// let number = "omar"
// console.log(number);
// const now = 2037
// const ageJonas = now - 1991
// const ageSarah = now - 2020

// const firstName = "jonas";
// const lastName = 'Schmedtmann'
// console.log(firstName + ' ' +  lastName);

// //Assignment Operators
// let x = 10 + 5;
// x += 10; // x = x + 10
// x *= 4 //x = x * 4 = 100
// x ++; // x = x + 1
// x--;
// x--;
// console.log(x);

// //Comparison Operators
// console.log(ageJonas > ageSarah); // >, <, <=, >=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18
// console.log(now - 1991 > now - 2018);

// const now = 2037
// const ageJonas = now - 1991
// const ageSarah = now - 2018

// console.log(now - 1991 > now - 2018);
// // console.log(25-10-5);

// let x,y;
// x = y = 25 - 10 - 5 // x = y = 10
// console.log(x,y);

// const averageAge = (ageJonas + ageSarah) / 2
// console.log(ageJonas, ageSarah, averageAge);

// const firstName = 'Jonas'
// const job = 'teacher'
// const birthyear= 1991;
// const year = 2037

// // const jonas = "I'm " + firstName + ', a ' + (year - birthyear) + ' years old ' + job + '!';
// // console.log(jonas);
// const jonas = `I'm ${firstName}, I'm ${(year - birthyear)} years old. I'm a school ${job}`
// console.log(jonas);

// const age = 15;

// if(age >= 18) {
//     console.log(`Sarah can start driving licensed`);
// } else {
//     // console.log(`Not old enough`);
//     const yearsLeft = 18 -age;
//     console.log(`Sarah is too young wait another ${yearsLeft} years....`);
// }

// const birthYear = 2001;
// let century;
// if(birthYear <= 2000 ) {
//      century = 20;
// } else {
//      century = 21;
// }
// console.log(century);

//type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 10);

// console.log(Number('Jonas'));

// //type coercion
// console.log('iam ' + 23 + ' years old');

// let n = '1' + 1 //'11'
// n = n -1;
// console.log(n);
// let l = 2+3+4 + '5' //95
// let z = '10'- '4'-'3'-2+'5' //15

// 5 falsey values = 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 0;
// if(money) {
//     console.log('Dont spend it all');
// } else {
//     console.log('u should get a job');
// }
// let height = 0;
// if(height) {
//     console.log('yayy height is defined');
// } else {
//     console.log('hieght is undefined');
// }

//equality variables
// const age = 18;
// const age = '18'
// if(age === 18) {
//     console.log('you just became an adult (strict)');
// } 
// if(age == 18) {
//     console.log('you just became an adult (loose)');
// } 

// const favorite = Number(prompt('Whats ur fav number?'));
// console.log(favorite);
// console.log(typeof favorite);

// // if (favorite == 23) { //'23' == 23
// //     console.log('23 is an amzing number');
// // } 
// if (favorite === 23) { // 23 === 23
//     console.log('23 is an amzing number');
// } else if (favorite === 7) {
//     console.log('7 is also a cool number');
// } else if (favorite === 9) {
//     console.log('9 is also a cool number');
// } else {
//     console.log('number is not 23 or 7 or 9');
// }

// if(favorite !== 23) {
//     console.log('why not 23?');
// }

// const hasDriversLicense = true //a
// const hasGoodVision = true //b

// // console.log(hasDriversLicense && hasGoodVision);
// // console.log(hasDriversLicense || hasGoodVision);
// // console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// // if (shouldDrive) {
// //     console.log('sarah is able to drive');
// // } else {
// //     console.log('someone else should drive....');
// // }

// const isTired = true //c
// // console.log(hasDriversLicense || hasGoodVision || isTired);
// // console.log(hasDriversLicense && hasGoodVision && isTired);


// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('sarah is able to drive');
// } else {
//     console.log('someone else should drive....');
// } 

//Switch statement
// const day = 'monday';

// switch (day) {
//     case 'monday': //day === 'monday'
//         console.log(`Plan my course structure`);
//         console.log(`Go to coding meetup`);
//         break;
//     case 'tuesday': 
//     console.log(`Prepare theory videos`);
//     break;
//     case 'wednesday':
//     case 'thursday':
//     console.log(`write code examples`);
//     break;
//     case 'friday':
//         console.log(`record videos`);
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log(`enjoy weekend`);
//     break;
//     default:
//         console.log(`not a valid date`);
// }

// else if statement
// const day = 'saturday'
// if(day === 'monday') {
//     console.log(`work on my homework`);
// } else if (day === 'tuesday' || day === 'wednesday' ) {
//     console.log(`go for a run late at night`);
// } else if (day === 'thursday') {
//     console.log(`practice more JavaScript`);
// } else if (day === 'friday') {
//     console.log(`play some call of duty: Warzone`);
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log(`enjoy weekend off`);
// } else {
//     console.log(`not an invalid date`);
// }

//ternary operators
// const age = 23;
// // age >= 18 ? console.log('i like to drink wine') : console.log('i like to drink water')
// // const drink = age >= 18 ? 'wine' : 'water'
// // console.log(drink);

// let drink2
// if (age >= 18) {
//     drink2 = 'wine'
// } else {
//     drink2 = 'water'
// }
// console.log(drink2);
// console.log(`i like to drink ${age >= 18 ? 'wine' : 'water'}`);

// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log('i can drive');

// const interface = 'audio'

//functions
// function logger() {
//     console.log('my name is jonas');
// }
// //calling //running //invoking
// logger() 


// function fruitProcessor (apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice
// }
// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2,4)
// console.log(appleOrangeJuice);

//function declaration
// function callAge1(birthYear) {
//     return  2037 - birthYear;
// }
// const age1 = callAge1(1991)
// console.log(age1);

// //function expression
// const  calcAge2 = function (birthYear) {
//     return  2037 - birthYear;
// }
// const age2 = calcAge2(1991)
// console.log(age2);

// //arrow function one line of code
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991)
// console.log(age3);

// //arrow function 
// const yearsUntilRetire = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement
//     return `${firstName} retires in ${retirement} years`
// }
// console.log(yearsUntilRetire(1991, "omar"));
// console.log(yearsUntilRetire(1980, "bob"));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples)
//     const orangePieces = cutFruitPieces(oranges)

//     const juice = `juice with ${applePieces} piece of apples and ${orangePieces} pieces of orange. `;
//     return juice;
// }

// console.log(fruitProcessor(2,3));

//functions overview
// const calcAge = function(year) {
//     return 2037 - year;
// }

// const yearsUntilRetire = function (birthYear, firstName)  {
//         const age = calcAge(birthYear)
//         const retirement = 65 - age;
//         if(retirement > 0) {
//             console.log(`${firstName} retires in ${retirement} years`);
//             return retirement;
//         } else {
//             console.log(`${firstName} has already retired`);
//             return -1;
//         }
//     }
//     console.log(yearsUntilRetire(1991, "omar"));
//     console.log(yearsUntilRetire(1950, "Mike"));
    
// LECTURE arrays
// const friends = ['Michael', 'Steven', 'Peter']
// console.log(friends);
// // const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length -1]);

// friends[2] = "Charles"
// console.log(friends);

// const firstName = 'Jonas' 
// const jonas = [firstName, 'Schemdutmann', 2037-1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// //exercise 
// const calcAge = function (birthyear) {
//     return 2037 - birthyear
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0])
// const age2 = calcAge(years[1])
// const age3 = calcAge(years[years.length -1])
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]),calcAge(years[years.length -1]) ]
// console.log(ages);

// Basic array operations(methods)

// const friends = ['Michael', 'Steven', 'Peter']

// //add elements
// friends.push('jay')
// console.log(friends);

// friends.unshift('john') //last
// console.log(friends);

// //remove elements
// friends.pop(); //last
// console.log(friends);

// friends.shift() //first
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.includes('Steven'));


// if(friends.includes('Jr')) {
//     console.log('you have a fried called peter');
// } else {
//     console.log('you dont have a friend named that');
// }

//lecture Objects

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'peter', 'Steven']
// }
// // two ways of retrieving data
// //dot notation
// console.log(jonas.friends);
// //bracket notation
// console.log(jonas['lastName']);
// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// // const interestedIn = prompt('What do you want to know about jonas? Choose between firstName, lastName, age, job, friends')

// // if(jonas[interestedIn]) {
// //     console.log(jonas[interestedIn]);
// // } else {
// //     console.log('Wrong request');
// // }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@omarosquero'
// console.log(jonas);

// //challenge 
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`);

// Lecture Object methods

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear:  1991,
    job: 'teacher',
    friends: ['Michael', 'peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     console.log(this);
    //         return 2037 - this.birthYear;
    //     }

    calcAge: function () {
            this.age =  2037 - this.birthYear;
            return this.age;
        },
    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`
    }
}


//dot notation
console.log(jonas.calcAge());
//bracket notation
// console.log(jonas["calcAge"](1991));
console.log(jonas.age);
//challenge 
//my way
// console.log(`${jonas.firstName} is a ${jonas.calcAge()}-year old ${jonas.job}, and he has ${jonas.hasDriversLicense = 'a'} drivers license`);
//jonas way
console.log(jonas.getSummary());

