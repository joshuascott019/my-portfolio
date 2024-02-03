// const x = 100;
// console.log(x);
// console.group("Cuteness Alert")
// console.warn("Monica's cuteness level is approaching 9000!");
// console.error("Monica's cuteness level has exceeded 9000!!!");
// console.table({name: "Monica", email: "monica@supreme.cute"});
// console.groupEnd();

// //single line comment
/* multi line comment */

// document.getElementById("title").innerHTML = "As of " + Date() + ", Monica is the cutest!";
// let a;
// console.log(a);
// console.log(Date());


// let amount = 100;
//Convert string to number
//amount = parseInt(amount);
//amount = +amount;
//amount = Number(amount);

//Convert number to string
// amount = amount.toString();
// amount = String(amount);

//Convert string to decimal
// amount = parseFloat(amount);

//Convert number to boolean
// amount = Boolean(amount)

// console.log(amount, typeof amount);


//Template Literals
// const name = "Monica";
// const age = 30;
// let y = `Hello, my name is ${name}, and I'm ${age} years-old!`;
// console.log(y);

// String Challenge
// const myString = "monica is the cutest";
// let myNewString = myString[0].toLocaleUpperCase() + myString.slice(1);
// let myNewString = `${myString[0].toLocaleUpperCase()}${myString.slice(1)}`;
// console.log(myNewString);


// Number Challenge
// let x = Math.floor(Math.random() * 100 + 1)
// let y = Math.floor(Math.random() * 50 + 1)

// let sumOutput = `${x} + ${y} = ${x + y}`;
// let diffOutput = `${x} - ${y} = ${x - y}`;
// let productOutput = `${x} * ${y} = ${x * y}`;
// let quotientOutput = `${x} / ${y} = ${x / y}`;
// let rmOutput = `${x} % ${y} = ${x % y}`;

// console.log(sumOutput)
// console.log(diffOutput)
// console.log(productOutput)
// console.log(quotientOutput)
// console.log(rmOutput)

// Dates & Times
//document.getElementById("title").innerHTML = "As of " + Date() + ", Monica is the cutest!";

//Array Challenge #1
// const arr = [1, 2, 3, 4, 5];

/*Error when trying to chain methods. 
CODE: arr.push(6).unshift(0).reverse(); */

//Working Code:
// arr.push(6);
// arr.unshift(0);
// arr.reverse();
// console.log(arr);
//Correct Results: arr = [6, 5, 4, 3, 2, 1, 0]

//Array Challenge #2
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [5, 6, 7, 8, 9, 10];
// arr2.shift();
// const arr3 = arr1.concat(arr2);
// console.log(arr3);


// Object Challenge
// Step 1
// const library = [
//     {
//         title: "title1",
//         author: "author1",
//         status: {
//             own: true,
//             reading: false,
//             read: false
//         }
//     },
//     {
//         title: "title2",
//         author: "author2",
//         status: {
//             own: true,
//             reading: false,
//             read: false
//         }
//     },
//     {
//         title: "title3",
//         author: "author3",
//         status: {
//             own: true,
//             reading: false,
//             read: false
//         }
//     }
// ]

// // Step 2
// library[0].status.read = true;
// library[1].status.read = true;
// library[2].status.read = true;
// console.log(library)
// // Step 3
// const { title: firstBook } = library[0];
// console.log(firstBook);
// // Step 4
// const libraryJSON = JSON.stringify(library);
// console.log(libraryJSON);



// Calculator Challenge:
// function calculator(num1, num2, operator){
//     if (operator == "+"){
//         return console.log(num1+num2)
//     } else if (operator == "-"){
//         return console.log(num1-num2)
//     } else if (operator == "*"){
//         return console.log(num1*num2)
//     } else if (operator == "/"){
//         return console.log(num1/num2)
//     } else {
//         return console.log("ERROR: Not a recognized operator")
//     }
//     switch (operator) {
//         case "+":
//             console.log(num1+num2);
//             break;
//         case "-":
//             console.log(num1-num2);
//             break;
//         case "*":
//             console.log(num1*num2);
//             break;
//         case "/":
//             console.log(num1/num2);
//             break;
//         default:
//             console.log("ERROR: Not a recognized operator");
//     }
// }
// calculator(5, 2, "+")


//FIZZBUZZ CHALLENGE:
// Via Logging:
// for (let i = 1; i < 2500; i++){
//     if (i%15 == 0) {
//         console.log("FizzBuzz")
//     } else if (i%3 == 0) {
//         console.log("Fizz")
//     } else if (i%5 == 0) {
//         console.log("Buzz")
//     }/*Personal Easter Egg*/ else if (i == 4 || i == 22 || i == 2021) {
//         switch (i) {
//             case 4:
//                 console.error("Codorna ")
//                 break
//             case 22:
//                 console.error("é a mais fofa ")
//                 break
//             default:
//                 console.error("de todas as fofuras! Te amo muito <3")
//         }
//     } else {
//         console.log(i)
//     }
// }
// Via Array:
// let arr = [0];
// for (let i = 1; i < 2500; i++){
//     if (i%15 == 0) {
//         arr.push("FizzBuzz");
//     } else if (i%3 == 0) {
//         arr.push("Fizz");
//     } else if (i%5 == 0) {
//         arr.push("Buzz");
//     }/*Personal Easter Egg*/ else if (i == 4 || i == 22 || i == 2021) {
//         switch (i) {
//             case 4:
//                 arr.push("Codorna ");
//                 break
//             case 22:
//                 arr.push("é a mais fofa ");
//                 break
//             default:
//                 arr.push("de todas as fofuras! Te amo muito <3");
//         }
//     } else {
//         arr.push(i);
//     }
// }
// console.log(arr);

//Array Methods
// const numbers = [];
// const arrFizz = [];
// const arrBuzz = [];
// const arrFizzBuzz = [];
// const easterEgg = [];

// arr.forEach(function(item){
//     switch(item){
//         case "Fizz":
//             arrFizz.push(item);
//             break
//         case "Buzz":
//             arrBuzz.push(item);
//             break
//         case "FizzBuzz":
//             arrFizzBuzz.push(item);
//             break
//         default:
//             if (typeof item === "string"){
//                easterEgg.push(item); 
//             } else {
//                 numbers.push(item);
//             }
            
//     }
// })

// console.log(arrFizz);
// console.log(arrBuzz);
// console.log(arrFizzBuzz);
// console.log(numbers);
// console.log(easterEgg);

// console.log(`Of ${arr.length} FizzBuzz challenge entries, there are ${arrFizz.length} Fizz's, ${arrBuzz.length} Buzz's, ${arrFizzBuzz.length} FizzBuzz's, and ${numbers.length} numbers. Along with ${easterEgg.length} Easter Egg entries to spell the message of:   "${easterEgg[0]+easterEgg[1]+easterEgg[2]}"`)


// Array Method Challenge #1:
// const people = [{
//     firstname: 'Josh',
//     lastname: 'Scott',
//     email: 'joshs@gmail.com',
//     phone: '(111)111-1111',
//     age: 32
// },
// {
//     firstname: 'Monica',
//     lastname: 'Marçal',
//     email: 'monicam@gmail.com',
//     phone: '(222)222-2222',
//     age: 30
// },
// {
//     firstname: 'Beans',
//     lastname: 'Microwave',
//     email: 'beansm@gmail.com',
//     phone: '(333)333-3333',
//     age: 36
// },
// {
//     firstname: 'Davey',
//     lastname: 'Duckey',
//     email: 'daveyd@gmail.com',
//     phone: '(444)444-4444',
//     age: 23
// },
// {
//     firstname: 'Melchizedek',
//     lastname: 'Woof',
//     email: 'melchizedekw@gmail.com',
//     phone: '(555)555-5555',
//     age: 4
// }]
// const youngPeople = people
//     .filter((person)=>person.age<=25)
//     .map((person)=>{
//         return {
//             name: `${person.firstname} ${person.lastname}`,
//             email: `${person.email}`
//         }
// });
// console.log(youngPeople)


//Array Method Challenge #2:
// const numbers = [2, -30, 50, 20, -12, -9, 7]
// const positiveSum = numbers
//     .filter((number)=> number > 0)
//     .reduce((acc, curr)=> acc + curr, 0)
// console.log(positiveSum); // 79


//Array Method Challenge #3:
// const words = ['coder', 'programmer', 'developer'];
// const capWords = words.map((word)=>{
//     return word.charAt(0).toUpperCase() + word.slice(1);
// })
// console.log(capWords);

