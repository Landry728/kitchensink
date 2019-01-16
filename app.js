let name = "Landry";

const STATES = 50;
// Functioning properly!

let sum = 5 + 4;      

// Hello World! function
function sayHello() {
    alert("Hello World!");
}

// Call that sayHello function
sayHello();    

function checkAge (name, age) {
    if (age <21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!")
    }
}  

// Calling checkAge function w/ 4 people Charles who is 21, Abby who is 27, James who is 18, and John who is 17.

let Charles = {
name: "Charles",
age: '21'
};

let Abby = {
name: 'Abby',
age: '27'
};

let James = {
    name:'James',
    age:'18'
};

let John = {
name: 'John',
age: '17'
};
checkAge(Charles.name, Charles.age);
checkAge(Abby.name, Abby.age);
checkAge(James.name, James.age);
checkAge(John.name, John.age);
// STEP 9 Create an array of your favorite vegetables and name it accordingly.
// & Use a loop to display each of your favorite vegetables to the developer console.

let veggies = ["cabbage", "spinach", "okra"];
for (let i=0; i < veggies.length; i++) {
    console.log(veggies[i]);
}

//STEP 10 Array 5 objects w/ name & age props

let friends = [
    {
        name: "Landry",
        age: 20
    },
    {
        name: "Ramie",
        age: 19
    },
    {
        name: "Hunting",
        age: 99
    },
    {
        name: "Lollipops",
        age: 22
    },
    {
        name: "Fishing",
        age: 99
    }
];
for (let i=0; i < friends.length; i++) {
    checkAge(friends[i].name, friends[i].age);
};

// STEP 11 LAST STEP 

function getLength(string) {
    return string.length;
}
let length = getLength("Hello World");
if (length % 2 === 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
};