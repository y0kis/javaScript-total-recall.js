//variable and datatypes
// 1. How do we assign a value to a variable? 
// We assign a value to a variable by using the assignment (=) operatorto assign a value to varianble or property.
//2. How do we change the value of a variable?
// The first and easiest way of changing a value of a variable is simply to reaasign it:
//example, let numberOfCats = 3; numberOfCats = 4;
// 3. What are declare, assign and define?
// Declare use var(only in older programs), let,const
//Assign using the assignment aperator 
//Define a variable is to give the varaible a value.
//5.What is pseudocoding and why should you do it?
//Pseudocoding is using plain language to describe what the code is doing. We should use it to help process the logic you intend to execute.
//6.What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
//You should spend over half the time planning (over 60%), the time should be spent in solving the actual coding should take less time.


// B STRINGS
// let firstVariable = "Hello World";
// firstVariable = 32;
//let secondVariable = firstVariable;
//secondVariable = "Nice!"
//console.log(firstVariable);
//let yourName = "Mary";
//let greeting = `Hello, my name is ${yourName}`;
//console.log(greeting);

// BOOLEANS
///const a = 4;
//const b = 53;
//const c = 57;
//const d = 16;
//const e = 'Kevin';
//console.log(a != b);

//BOOLEANS
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';
// console.log(a != b);
// console.log(c != d);
// console.log('Name' == 'Name');

//FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false && false && false || true);
// console.log(false == false);
// console.log(e == 'Kevin');
// console.log(a < b != c);
// console.log(a == a != d);
// console.log(48 == '48');

// The farm
//if animal is a cow print moooooo
//if the animal is not a cow print "Hey! You're not a cow."

// let animal ="cow";

// if (animal === "cat"){
//     console.log("moooooo");
// } else {
//     console.log("Hey! You're not a cow.");
// }

//  Driver's  Ed

// let personAge = 9;

// if (personAge >= 16) {
//     console.log("Here are the keys!");
// } else {
//     console.log("Sorry, you're too young.");
// }

// Loops
// Write a loop that print out all the numbers from 0 to 10, inclusive

// for(let i = 0; i <11; i++) {
// console.log(i)
// }

//Write a loop that will print out all the numbers from 10 up to and including 400

// for (i = 10; i <401; i++) {
//     console.log(i)
// }

//Write a loop that will print out every third number starting with 12 and going no higher than 4000

// for (let i = 12; i <= 4000; i+=3) {

//     console.log(i)
// }

//Get even
//Print out the numbers that are within the range of 1- 100

// for (let i=1; i <=100; i++) {
//     if (i%2 ===0) {
//         console.log(i)
//     }
//}

//Adjust your code to add a message next to even numbers only that says."<--is an even number"

// for (i = 1; i<=100; i++) {
//         if (i%2 === 0) {
//         console.log( i +'<-- is an even number');
//         } else {
//         console.log(i); }
// }

// // For the number 0 -100, print out "I found a number. High five!" if the number is a multiple of five

// for (let i= 0; i <=100; i++) {
//         if (i%5 === 0) {
//         console.log(i + 'I found a number. High five!');
// } else {
//         console.log(i);
// }
// }

// // // Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three

// for (let i= 0; i <=100; i++) {
//         if (i%3 === 0) {
//                 console.log(i + 'I found a number. Three is a crowd');
//         } else {
//                 console.log(i);
//        }
//}

// Savings account 
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called  bank_account.

// let bank_account = 0;
// for (let i = 1; i <= 10; i++) {
//         bank_account += i;
// }
//         console.log(bank_account);

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.

// let bank_account = 0;
// for (let i = 1; i <= 100; i++) {
//         bank_account += i*2;
// }
//         console.log(bank_account);

// Arrays & Control flow 
// A. Talk about it:
//1. What are the things in an array called?
// The things in an array is called an Element.
//2. Do Arrays guarantee those things will be in order?
// Yes it does guarantee those things will be in order'
// 3. What real-life thing could you model with an array?
// Daily activities

// B. Easy Does It 
// 1. Create an array that contains three quotes and store it in a variable called quotes

// let quotes = ["It take a village to raise a girl", "perseverance is key", "Dawn comes in the morning"];
//         console.log(quotes);

// C. Accessing elements
// Given the following array const randomThings = [1, 10, "Hello", true]
//1. How do youy access thge 1st element in the aaray?

// const randomThings = [1, 10, "Hello", true]
//         console.log(randomThings [0]);

// // 2.Change the value of "Hello" to "World"
// randomThings[2] = "World";

// //3. Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
//         console.log(randomThings);

//D. Change values
//Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
//1. What would you write to access the 3rd element of the array?
//const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
        //console.log(ourClass[3]);
//2. Change the value of "Github" to "Octocat"
//ourClass[4] = "Octocat";    
//console.log(ourClass);
//3.Add a new element, "Cloud City" to the array
//ourClass.push("Cloud City");
//console.log(ourClass);

// E. Mix It Up 
// Given the following array: const myArray = [5, 10, 500, 20]
//1. Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
// const myArray = [5, 10, 500, 20];
// myArray.push("Aregon", "Ohio");
// console.log(myArray);
// //2.Remove the 5from the beginning of the array.
// myArray.shift();
// console.log(myArray);
// //3.Add the string "Bob Marley"to the beginning of the array.
// myArray.unshift("Bob Marley");
// console.log(myArray);
// //4.Remove the string of your choice from the end of the array.
// myArray.pop();
// console.log(myArray);
//5. Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse() method return anything?
//myArray.reverse();
//console.log(myArray);

//F. Biggie Smalls
// //1. console.log()s "little number" if the number is entered is less than 100
// let num = 100
// if (num <30) {
//         //console.log("little number");
// }
// //2. console.log()s  big number if the number is greater than or equal to 100.
// else  {
//         console.log("big number");
// }

//G. Monkey in the Middle
//1. console.log() little number if the number entered is less than 5.
// let num = 3
// if (num <5) {
//         console.log("little number");
// }
// //2. If the number entered is more than 10, log  big number
// if (num >10) {
//         console.log("big number");
// }
// else {
//         console.log("monkey");
// }


































