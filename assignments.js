// let country = 'USA';
// let continent = "North America"
// let population = 331
// let language;
// let finland = 5
// let description = 'Portugal is in Europe, and its 11 million people speak portuguese'
// language = 'spanish'
// // console.log(`${country} is in ${continent} and has a population of ${population}... and they speak ${language} `);

// if (population > 33) {
//     console.log(`${country} population is above average with a population of ${population} million people`);
// } else {
//     console.log(`${country} is below average`);
// }

// Predict the result of these 5 operations without executing them:
// '9' - '5';  =///// '4'
// '19' - '13' + '17'; = ///// '617'
// '19' - '13' + 17; /// 23
// '123' < 57; //// false
// 5 + 6 + '4' + 9 - 4 - 2;  1143
 
// LECTURE: Equality Operators: == vs. ===
// const numNeighbours = Number(prompt('How many neighnours does your country have?'))
// if (numNeighbours === 1) {
//     console.log("My country has only 1 border");
// } else if (numNeighbours > 1) {
// console.log("My country has more then 1 neighbour");
// } else if (numNeighbours === 0) {
//     console.log("my country has no neighbors");
// }


// LECTURE: Logical Operators
// const country = 'Mexico'
// const language = 'Spanish'
// const population = 45

// if(language  === 'English') {
//     console.log(`this country does not meet your criteria :( ${country} speaks ${language} only...`);
// } else if (population <= 50) {
//     console.log(`this country may be for you :) ${country} has a population of ${population} million people...`);
// }  else {
//     console.log(`sorry i dont think any country meets your criteria`);
// }


// LECTURE: The switch Statement
// const language  = 'spanish'
// switch (language) {
//     case 'chinese':
//     case 'mandarin':
//         console.log(`Most number of native speaker`);
//     break;
//     case 'spanish':
//         console.log(`2nd place in number of native speakers`);
//     break;
//     case 'english':
//         console.log(`3rd place`);
//     break;
//     case 'hindi':
//         console.log(`number 4`);
//     break;
//     case 'arabic':
//         console.log(`5th most spoken langauge`);
//     break;
//     default:
//         console.log(`great language too :D`);
// }

// LECTURE: The Conditional (Ternary) Operator
// const country = 'USA'
// const populationUSA = 320
// populationUSA > 33  ? console.log("USA population is above average") : console.log("USA population is below average")

// LECTURE: Functions
// function describeCountry (country, population, capitalCity) { 
//     const sentenceCountry = `${country} has ${population} million people and its capital city is ${capitalCity}.`
//     return sentenceCountry
// }
// const functionCountry = describeCountry('finland', 6 , 'Helsinki' )
// const functionCountry2 = describeCountry('USA', 330, 'Washington D.C')
// const functionCountry3 = describeCountry('Mexico', 132, 'Mexico City')

// console.log(functionCountry);
// console.log(functionCountry2);
// console.log(functionCountry3);

//LECTURE: Function Declarations vs. Expressions

 //Function Expression
//  const tester1 = function percentageOfWorld2(population) {
//         return population / 7900 * 100;      
//  }
//  const countryTest = tester1(1441)
//  const countryTest2 = tester1(330)
//  const countryTest3= tester1(132)

// console.log(`China has a population of 1.4 billion people, so its about ${countryTest} of the world population`);
// console.log(`USA has a population of 330 milllion people, so its about ${countryTest2} of the world population`);
// console.log(`Mexico has a population of 132 million people, so its about ${countryTest3} of the world population`);

// Arrow function
// const percentageOfWorld3 = (population) =>  population / 7900 * 100;

// const countryPercentage = percentageOfWorld3(1441)
// console.log(`China has a population of 1.4 billion people, so its about ${countryPercentage} of the world population`);
// const countryPercentage2 = percentageOfWorld3(330)
// console.log(`USA has a population of 330 milllion people, so its about ${countryPercentage2} of the world population`);
// const countryPercentage3 = percentageOfWorld3(132)
// console.log(`Mexico has a population of 132 million people, so its about ${countryPercentage3} of the world population`);

//function Declaration
// function percentageOfWorld1 (population) {
//     const percentageCountry = population / 7900 * 100;
//     return percentageCountry;
// }
// const test1 = percentageOfWorld1(1441)
// const test2 = percentageOfWorld1(331)
// const test3 = percentageOfWorld1(132)
// console.log(`China has a population of 1.4 billion people, so its about ${test1} of the world population`);
// console.log(`USA has a population of 330 milllion people, so its about ${test2} of the world population`);
// console.log(`Mexico has a population of 132 million people, so its about ${test3} of the world population`);

// LECTURE: Functions Calling Other Functions

// const describePopulation = function(country, population) {
//     const percentage = percentageOfWorld1(population)
//     const description = `${country} has ${population} million people, which is about ${percentage} of the world`
//     console.log(description);
// }

// describePopulation('China', 1441)
// describePopulation('USA', 330)
// describePopulation('Mexico', 132)

// Lecture: intro to arrays
// const populations = [1441, 330, 132 ]
// console.log(populations.length === 3);
// const percentages = [
// percentageOfWorld1(populations[0]),
// percentageOfWorld1(populations[1]),
// percentageOfWorld1(populations[2])
// ]
// console.log(percentages);

// LECTURE : Intro to Objects 
// const myCountry = {
//     country: 'Mexico',
//     capital: 'Mexico City',
//     language: 'Spanish',
//     population: 132,
//     neighbours: ['USA', 'Guatemala']
// }
// console.log(myCountry);
// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people,
//  ${myCountry.neighbours.length} neighboring countries (${myCountry.neighbours[0]}, ${myCountry.neighbours[1]}) and a capital called ${myCountry.capital}..`);

// myCountry.population += 2;
// console.log(myCountry.population);
// myCountry['population'] -= 2;
// console.log(myCountry.population);

