// Assign the string value Sammy to the username identifier
var username = "Aqil";
// Check if variable is equal to value
if (username === "Aqil") {
    console.log(true);
  }
  // Assignment of various variables
var name = "Dullzy";
var age = 200;
var kingdoms = [ "mammals", "birds", "fish" ];
var poem = { roses: "red", violets: "blue" }; 
var success = true;
var nothing = null;
// Send spartans variable to the console
console.log(age);
// Assign value to password variable
var password = "portugal";

// Reassign variable value with a new value
password = "spain";

console.log(password);

// Initialize a global variable
var creature = "cat";
// Initialize a global variable
var species = "alien";
 
function transform() {
  // Initialize a local, function-scoped variable
  var species = "dog";
  console.log(species);
}

// Log the global and local variable
console.log(species);
transform();
console.log(species);

// Use var to initialize a variable
var species = "human";

if (fullMoon) {
  // Attempt to create a new variable in a block
  var species = "dog";
  console.log(`It is a bone. Lupin is currently a ${species}.`);
}

console.log(`It is not a bone. Lupin is currently a ${species}.`);

// Attempt to use a variable before declaring it
console.log(x);

// Variable assignment
var x = 100;
// Attempt to use a variable before declaring it
console.log(x);

// Variable assignment without var
x = 100;

// The code we wrote
console.log(x);
var x = 100;

// How JavaScript interpreted it
var x;
console.log(x);
x = 100;
// Initialize x in the global scope
var x = 100;

function hoist() {
  // A condition that should not affect the outcome of the code
  if (false) {
    var x = 200;
  }
  console.log(x);
}

hoist();
// Initialize x in the global scope
let x = true;

function hoist() {
  // Initialize x in the function scope
  if (3 === 4) {
    let x = false;
  }
  console.log(x);
}

hoist();
// Attempt to overwrite a variable declared with var
var x = 1;


console.log(x);
// Attempt to overwrite a variable declared with let
// Assign value to const
const SPECIES = "dog"; 

// Attempt to reassign value
SPECIES = "dog";

console.log(SPECIES);

// Declare but do not initialize a const
// const TODO;

// console.log(TODO);
// Create a CAR object with two properties
const CAR = {
	color: "Red",
	price: 40000
}

// Modify a property of CAR
CAR.price = 20000;

console.log(CAR);
// Initialize gimli object
const sports = {
	name: "Soccer",
	player: "ronaldo",
	weapon: "ball",
	greet: function() {
		return `Hi, my name is ${this.name}!`;
	},
};
sports;
sports.player;
sports[weapon];
// Add new age property to gimli
sports.weapon = "football";

// Add new fight method to gimli
sports.name = function() {
	return `What it do baby ${this.weapon}.`;
}
sports.name;

// Remove weapon from gimli
delete sports.weapon;
sports;

const names = {
	name: "Aqil",
	race: "karim",
	weapon: "jordan",
};

// Assign the five oceans to five variables
const sports1 = "BasketBall";
const sports2 = "soccer";
const sports3 = "golf";

// Assign the five oceans
let oceans = [
	"Pacific",
	"Atlantic",
	"Indian",
	"Arctic",
	"Antarctic",
];
let seaCreatures = [
	"octopus",
	"squid",
	"shark",
	"seahorse",
	"starfish",
];
seaCreatures.length;

seaCreatures.indexOf("seahorse");
seaCreatures.indexOf("cuttlefish");
seaCreatures[1];
const lastIndex = seaCreatures.length - 1;

seaCreatures[lastIndex];
seaCreatures[10];
let nestedArray = [
	[
		"salmon",
		"halibut",
	],
	[
		"coral",
		"reef",
	]
];

nestedArray[1][0];

seaCreatures[5] = "whale";

seaCreatures;

seaCreatures[7] = "pufferfish";

seaCreatures;

seaCreatures[6];
// Append lobster to the end of the seaCreatures array
seaCreatures.push("lobster");

seaCreatures;

// Append dragonfish to the beginning of the seaCreatures array
seaCreatures.unshift("dragonfish");

seaCreatures;

seaCreatures.splice(7, 1);

seaCreatures;

let firstArray = seaCreatures.slice(0, 7);
let secondArray = seaCreatures.slice(8, 10); 

firstArray.concat(secondArray);

seaCreatures;

// Remove the last item from the seaCreatures array
seaCreatures.pop();

seaCreatures;

// Remove the first item from the seaCreatures array
seaCreatures.shift();

seaCreatures;

// Assign manatee to the first item in the seaCreatures array
seaCreatures[0] = "manatee";

seaCreatures;
// Replace seahorse with sea lion using splice method
seaCreatures.splice(3, 1, "sea lion");

seaCreatures();
// Create an array of shellfish species
let shellfish = [
	"oyster",
	"shrimp",
	"clam",
	"mussel",
];

// Loop through the length of the array
for (let i = 0; i < shellfish.length; i++) {
  console.log(i, shellfish[i]);
}

// Create an array of aquatic mammals
let mammals = [
	"dolphin",
	"whale",
	"manatee",
];

// Loop through each mammal
for (let mammal of mammals) {
	console.log(mammal);
}
// Declare variable outside the loop
let i = 0;

// Omit all statements
for (; ;) {
	if (i > 3) {
		break;
	}
	console.log(i);
	i++;
}
// Initialize empty array
let arrayExample = [];

// Initialize loop to run 3 times
for (let i = 0; i < 3; i++) {
	// Update array with variable value
	arrayExample.push(i);
	console.log(arrayExample);
}
// Declare array with 3 items
let fish = [ "flounder", "salmon", "pike" ];

// Initalize for loop to run for the total length of an array
for (let i = 0; i < fish.length; i++) {
	// Print each item to the console
	console.log(fish[i]);
}

const shark = {
	species: "great white",
	color: "white",
	numberOfTeeth: Infinity
}
// Print property names of object
for (attribute in shark) {
	console.log(attribute);
}
// Print property values of object
for (attribute in shark) {
	console.log(shark[attribute]);
}

// Print names and values of object properties
for (attribute in shark) {
	console.log(`${attribute}`.toUpperCase() + `: ${shark[attribute]}`);
}
// Initialize array of shark species
let sharks = [ "great white", "tiger", "hammerhead" ];

// Print out each type of shark
for (let shark of sharks) {
	console.log(shark);
}

// Loop through both index and element
for (let [index, shark] of sharks.entries()) {
	console.log(index, shark);
}
// Assign string to a variable
let sharkString = "sharks";

// Iterate through each index in the string
for (let shark of sharkString) {
	console.log(shark);
}

// Initialize greeting function
function greet() {
	console.log("Hello, Worldcup!");
}
greet();

// Initialize custom greeting function
function greets(name) {
	console.log(`Hello, ${name}!`);
}

// Invoke greet function with "Sammy" as the argument
greets("Sammy");
// Initialize add function
function add(x, y) {
	return x + y;
}

// Invoke function to find the sum
add(9, 7);
// Assign add function to sum constant
const sum = function add(x, y) {
	return x + y;
}

// Invoke function to find the sum
sum(20, 5);
// Define multiply function
const multiply = (x, y) => {
	return x * y;
}

// Invoke function to find product
multiply(30, 4);

// Define square function
const square = x => {
	return x * x;
}

// Invoke function to find product
square(8);
// Define square function
const squares = x => x * x;

// Invoke function to find product
square(10);
const x = function() {}

// Initialize a constructor from a function
const constructorFromFunction = new x();

console.log(constructorFromFunction);
const y = class {}

// Initialize a constructor from a class
const constructorFromClass = new y();

console.log(constructorFromClass);

// Initializing a constructor function
function Hero(name, level) {
	this.name = name;
	this.level = level;
}
// Initializing a class definition
class Hero {
	constructor(name, level) {
		this.name = name;
		this.level = level;
	}
}
// Initialize an object with properties and methods
const job = {
    position: 'cashier',
    type: 'hourly',
    isAvailable: true,
    showDetails() {
        const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

        console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
    }
};

// Use Object.create to pass properties
const barista = Object.create(job);

barista.position = "barista";
barista.showDetails();

// Initialize an object
const employees = {
	boss: 'Michael',
	secretary: 'Pam',
	sales: 'Jim',
	accountant: 'Oscar'
};

// Get the keys of the object
const keys = Object.keys(employees);

console.log(keys);
// Iterate through the keys
Object.keys(employees).forEach(key => {
    let value = employees[key];

	 console.log(`${key}: ${value}`);
});
// Get the length of the keys
const length = Object.keys(employees).length;

console.log(length);

// Initialize an object
const session = {
    id: 1,
    time: `26-July-2018`,
    device: 'mobile',
    browser: 'Chrome'
};

// Get all values of the object
const values = Object.values(session);

console.log(values);

// Initialize an object
const operatingSystem = {
    name: 'Ubuntu',
    version: 18.04,
    license: 'Open Source'
};

// Get the object key/value pairs
const entries = Object.entries(operatingSystem);

console.log(entries);

// Loop through the results
entries.forEach(entry => {
    let key = entry[0];
    let value = entry[1];

    console.log(`${key}: ${value}`);
});

// Initialize an object
const name = {
    firstName: 'Philip',
    lastName: 'Fry'
};

// Initialize another object
const details = {
    job: 'Delivery Boy',
    employer: 'Planet Express'
};

// Merge the objects
const character = Object.assign(name, details);

console.log(character);

// Initialize an object
const name = {
    firstName: 'Philip',
    lastName: 'Fry'
};

// Initialize another object
const detailss = {
    job: 'Delivery Boy',
    employer: 'Planet Express'
};

// Merge the object with the spread operator
const characters = {...name, ...details}

console.log(character);

// Initialize an object
const user = {
	username: 'AzureDiamond',
	password: 'hunter2'
};

// Freeze the object
const newUser = Object.freeze(user);

newUser.password = '*******';
newUser.active = true;

console.log(newUser);

// Initialize an object
const users = {
	username: 'AzureDiamond',
	password: 'hunter2'
};

// Seal the object
const newUser = Object.seal(user);

newUser.password = '*******';
newUser.active = true;

console.log(newUser);

const employes = ['Ron', 'April', 'Andy', 'Leslie'];

Object.getPrototypeOf(employees);

const note = {
    id: 1,
    title: 'My first note',
    date: '01/01/1970',
  }
  // Create variables from the Object properties
const id = note.id
const title = note.title
const date = note.date
// Destructure properties into variables
const { ids, titles, dates } = note

console.log(id)
console.log(title)
console.log(date)
// Assign a custom name to a destructured value
const { id: noteId, book, time } = note
// Destructure nested properties
const {
    Id,
    Title,
    Date,
    author: { firstName, lastName },
  } = note
  console.log(`${firstName} ${lastName}`)

  // Access object and nested values
const {
    author,
    author: { firstNames, lastNames },
  } = note
  
  console.log(author)
  const { lengths } = 'A string';
  console.log(length);

  const datees = ['1970', '12', '01']

  // Create variables from the Array items
const year = date[0]
const month = date[1]
const day = date[2]

// Destructure Array values into variables
const [years, months, days] = date
console.log(year)
console.log(month)
console.log(day)

// Skip the second item in the array
const [yearss, , dayss] = date

console.log(year)
console.log(day)
// Create a nested array
const nestedArrays = [1, 2, [3, 4], 5]
// Destructure nested items
const [one, two, [three, four], five] = nestedArray

console.log(one, two, three, four, five)
const notes = {
    id: 1,
    title: 'My first note',
    date: '01/01/1970',
  }
  // Using forEach
Object.entries(note).forEach(([key, value]) => {
    console.log(`${key}: ${value}`)
  })
  // Using a for loop
for (let [key, value] of Object.entries(note)) {
    console.log(`${key}: ${value}`)
  }
  const notess = {
    title: 'My first note',
    author: {
      firstName: 'Sherlock',
      lastName: 'Holmes',
    },
    tags: ['personal', 'writing', 'investigations'],
  }
  const {
    titless,
    datess = new Date(),
    author: { firstNamess },
    tags: [personalTag, writingTag],
  } = note
  
  console.log(date)
  // Create an Array
const tools = ['hammer', 'screwdriver']
const otherTools = ['wrench', 'saw']
// Concatenate tools and otherTools together
const allTool = tools.concat(otherTools)
// Unpack the tools Array into the allTools Array
const allTools = [...tools, ...otherTools]

console.log(allTools)
// Array of users
const userss = [
    { id: 1, name: 'Ben' },
    { id: 2, name: 'Leslie' },
  ]
  // A new user to be added
const newUser = { id: 3, name: 'Ron' }

users.push(newUser)
const updatedUsers = [...users, newUser]

console.log(users)
console.log(updatedUsers)
// Create an Array
const originalArrays = ['one', 'two', 'three']

// Assign Array to another variable
const secondArrays = originalArray
// Remove the last item of the second Array
secondArray.pop()

console.log(originalArray)
// Create an Array
const originalArray = ['one', 'two', 'three']

// Use spread to make a shallow copy
const secondArrayss = [...originalArray]

// Remove the last item of the second Array
secondArray.pop()

console.log(originalArray)

// Create a set
const set = new Set()

set.add('octopus')
set.add('starfish')
set.add('whale')

// Convert Set to Array
const seaCreatures = [...set]

console.log(seaCreatures)
const string = 'hello'

const stringArray = [...string]

console.log(stringArray)
// Create an Object and a copied Object with Object.assign()
const originalObjects = { enabled: true, darkMode: false }
const secondObjects = Object.assign({}, originalObject)
// Create an object and a copied object with spread
const originalObject = { enabled: true, darkMode: false }
const secondObject = { ...originalObject }

console.log(secondObject)
const usersss = {
    id: 3,
    name: 'Ron',
  }
  
  const updatedUser = { ...user, isLoggedIn: true }
  
  console.log(updatedUser)
  const user1 = {
    id: 3,
    name: 'Ron',
    organization: {
      name: 'Parks & Recreation',
      city: 'Pawnee',
    },
  }
  const updatedUser2 = { ...user, organization: { position: 'Director' } }

console.log(updatedUser)
user.organization.position = 'Director'
const updatedUser4 = {
    ...user,
    organization: {
      ...user.organization,
      position: 'Director',
    },
  }
  
  console.log(updatedUser)

  // Create a function to multiply three items
function multiply(a, b, c) {
    return a * b * c
  }
  multiply(1, 2, 3)
  const numbers = [1, 2, 3]

multiply(...numbers)
function restTest(...args) {
    console.log(args)
  }
  
  restTest(1, 2, 3, 4, 5, 6)
  function restTest(one, two, ...args) {
    console.log(one)
    console.log(two)
    console.log(args)
  }
  
  restTest(1, 2, 3, 4, 5, 6)
  function testArguments() {
    console.log(arguments)
  }
  
  testArguments('how', 'many', 'arguments')
  const testArguments = () => {
    console.log(arguments)
  }
  
  testArguments('how', 'many', 'arguments')
  const [firstTool, ...rests] = ['hammer', 'screwdriver', 'wrench']

console.log(firstTool)
console.log(rest)
const { isLoggedIn, ...rest } = { id: 1, name: 'Ben', isLoggedIn: true }

console.log(isLoggedIn)
console.log(rest)

sum(1, 2)

function sum(a, b) {
  return a + b
}
console.log(sum)
const sum = function (a, b) {
    return a + b
  }
  sum(1, 2)

const sum = function (a, b) {
  return a + b
}
const sum = function (a, b) {
    return a + b
  }
  
  console.log(sum)
  const sum = function namedSumFunction(a, b) {
    if (!a || !b) throw new Error('Parameters are required.')
  
    return a + b
  }
  
  sum();

  const sum = (a, b) => {
    return a + b
  }

  const printNumbers = {
    phrase: 'The current value is:',
    numbers: [1, 2, 3, 4],
  
    loop() {
      this.numbers.forEach(function (number) {
        console.log(this.phrase, number)
      })
    },
  }
  printNumbers.loop()

  const printNumberss = {
    phrase: 'The current value is:',
    numbers: [1, 2, 3, 4],
  
    loop() {
      // Bind the `this` from printNumbers to the inner forEach function
      this.numbers.forEach(
        function (number) {
          console.log(this.phrase, number)
        }.bind(this),
      )
    },
  }
  
  printNumbers.loop()

  const printNumber = {
    phrase: 'The current value is:',
    numbers: [1, 2, 3, 4],
  
    loop() {
      this.numbers.forEach((number) => {
        console.log(this.phrase, number)
      })
    },
  }
  
  printNumbers.loop()
  const printNumber1 = {
    phrase: 'The current value is:',
    numbers: [1, 2, 3, 4],
  
    loop: () => {
      this.numbers.forEach((number) => {
        console.log(this.phrase, number)
      })
    },
  }
  printNumbers.loop()
  function myFunction() {
    this.value = 5
  }
  
  // Log the prototype property of myFunction
  console.log(myFunction.prototype)
  const instance = new myFunction()

console.log(instance.value)
const myArrowFunction = () => {}

// Attempt to log the prototype property of myArrowFunction
console.log(myArrowFunction.prototype)
const arrowInstance = new myArrowFunction()

console.log(arrowInstance)
const sum = (a, b) => {
    return a + b
  }
  const sum = (a, b) => a + b

  const sum = (a, b) => ({result: a + b})

sum(1, 2)

const squar = (x) => x * x
square(10)

const greet = () => 'Hello!'

greet()

// Define three example functions
function first() {
    console.log(1)
  }
  
  function second() {
    console.log(2)
  }
  
  function third() {
    console.log(3)
  }
  // Execute the functions
first()
second()
third()

// Define three example functions, but one of them contains asynchronous code
function first() {
    console.log(1)
  }
  
  function second() {
    setTimeout(() => {
      console.log(2)
    }, 0)
  }
  
  function third() {
    console.log(3)
  }
  // Execute the functions
first()
second()
third()

// A function
function fn() {
    console.log('Just a function')
  }
  
  // A function that takes another function as an argument
  function higherOrderFunction(callback) {
    // When you call a function that is passed as an argument, it is referred to as a callback
    callback()
  }
  
  // Passing a function
  higherOrderFunction(fn)
  function first() {
    console.log(1)
  }
  
  function second() {
    setTimeout(() => {
      console.log(2)
    }, 0)
  }
  
  function third() {
    console.log(3)
  }
  // Define three functions
function first() {
    console.log(1)
  }
  
  function second(callback) {
    setTimeout(() => {
      console.log(2)
  
      // Execute the callback function
      callback()
    }, 0)
  }
  
  function third() {
    console.log(3)
  }
  first()
second(third)

function pyramidOfDoom() {
    setTimeout(() => {
      console.log(1)
      setTimeout(() => {
        console.log(2)
        setTimeout(() => {
          console.log(3)
        }, 500)
      }, 2000)
    }, 1000)
  }
  // Example asynchronous function
function asynchronousRequest(args, callback) {
    // Throw an error if no arguments are passed
    if (!args) {
      return callback(new Error('Whoa! Something went wrong.'))
    } else {
      return setTimeout(
        // Just adding in a random number so it seems like the contrived asynchronous function
        // returned different data
        () => callback(null, {body: args + ' ' + Math.floor(Math.random() * 10)}),
        500,
      )
    }
  }
  
  // Nested asynchronous requests
  function callbackHell() {
    asynchronousRequest('First', function first(error, response) {
      if (error) {
        console.log(error)
        return
      }
      console.log(response.body)
      asynchronousRequest('Second', function second(error, response) {
        if (error) {
          console.log(error)
          return
        }
        console.log(response.body)
        asynchronousRequest(null, function third(error, response) {
          if (error) {
            console.log(error)
            return
          }
          console.log(response.body)
        })
      })
    })
  }
  
  // Execute 
  callbackHell()

  // Initialize a promise
const promise = new Promise((resolve, reject) => {})

const promises = new Promise((resolve, reject) => {
    resolve('We did it!')
  })

  // Initialize a promise
const promise3 = new Promise((resolve, reject) => {})

const promise4 = new Promise((resolve, reject) => {
    resolve('We did it!')
  })

  promise.then((response) => {
    console.log(response)
  })

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Resolving an asynchronous request!'), 2000)
  })
  
  // Log the result
  promise.then((response) => {
    console.log(response)
  })

  // Chain a promise
promise
.then((firstResponse) => {
  // Return a new value for the next then
  return firstResponse + ' And chaining!'
})
.then((secondResponse) => {
  console.log(secondResponse)
})
function getUsers(onSuccess) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Handle resolve and reject in the asynchronous API
      }, 1000)
    })
  }

  function getUsers(onSuccess) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Handle resolve and reject in the asynchronous API
        if (onSuccess) {
          resolve([
            {id: 1, name: 'Jerry'},
            {id: 2, name: 'Elaine'},
            {id: 3, name: 'George'},
          ])
        } else {
          reject('Failed to fetch data!')
        }
      }, 1000)
    })
  }

  // Run the getUsers function with the false flag to trigger an error
getUsers(false)
.then((response) => {
  console.log(response)
})
.catch((error) => {
  console.error(error)
})

// Run the getUsers function with the true flag to resolve successfully
getUsers(true)
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.error(error)
  })








































// let x = "10";
// let y = 10;

// let IsItRaining = true;

// let nickName = 'mike';



// function printPriceAfterDiscount(dollarAmount, discount){
   
//     let y = discount / 100; 
//     let change = dollarAmount * y;
//     let coffeeAFterDiscount = dollarAmount- change;
//     return coffeeAFterDiscount;
// }
// console.log(printPriceAfterDiscount(20.00,5));

// const person = {
//     firstName: "mike",
//     lastName: "jones",
//     age: 50,
//     eyeColor:"brown",
//     fullName: function(){
//         return this.firstName + " " + this.lastName;
//     }
// }

// function printUserName(user1,user2){
//     console.log("user 1 is : ", person.firstName," ", person.lastName)
// }
// console.log(person.firstName);
// console.log(person.fullName());
// const whips = ["bmw", "benz", "bentley"]
// whips[3] = "buggati";
// console.log(whips[1]);
// for(let x = 0; x < whips.length; x++){
//     console.log(whips[x]);
//    }
   
//    const bill = [10.0,45.0,25.0];
   
//     let total = 0;
//  for(let x = 0; x < bill.length; x++){
//     total = total + bill[x];
//     console.log(total);
//    }
   
