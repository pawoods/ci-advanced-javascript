/**
 * To run this file in Gitpod, use the 
 * command node advanced-javascript.js in the terminal
 */

//----------ARROW FUNCTIONS----------

// Vanilla JavaScript Function
function addTwoNumbers (a, b) {
    //Code block
    return a + b;
}

let sum1 = addTwoNumbers(3, 5);
console.log(sum1);

// Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => {
    //Code block
    return a + b;
}

let sum2 = addTwoNumbers2(4, 8);
console.log(sum2);

// Single Line Arrow Function With Parameters
// const subtractNumber = (a, b) => (a - b); also valid
const subtractNumber = (a, b) => a - b;

let sum3 = subtractNumber(4, 5);
console.log(sum3);

// Implicit Returns
const saySomething = message => console.log(message);
saySomething("Hello there!");

const sayHello = () => console.log("Hello!");
sayHello();

// Returning Multiple Lines
const returnMultipleLines = (a, b) => (
    `<p>
        ${a} + ${b} = ${a + b}
    </p>`
)

console.log(returnMultipleLines(4, 4));

// Arrow Function Challenge 
let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];

const averagePoints = (arr, subject) => {
    let allPoints = 0;
    let sum = 0;
    for(let itm of arr) {
        if(subject in itm.results){
            allPoints += itm.results[subject];
            sum += 1;
        }
    }
    return allPoints / sum;
};

let averageMarks = averagePoints(students, "english");
console.log(averageMarks);

//----------SPREAD OPERATOR----------

// No spread operator
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log("First array: ", arr1);
console.log("Second array: ", arr2);

// Copying an array
let arr3 = [4, 5, 6];
let arr4 = [...arr3];
arr4.push(7);
console.log("Third array: ", arr3);
console.log("Fourth array: ", arr4);

// Copying an object
let obj1 = {a:1, b:2, c:3};
let obj2 = {...obj1, d:4};
let obj3 = {...obj2, c:5};
console.log("First object: ", obj1);
console.log("Second object: ", obj2);
console.log("Third object: ", obj3);
obj1.a = 10
console.log("First object: ", obj1);
obj2["b"] = 10;
console.log("Second object: ", obj2);

// Copying only part of an array/object
let arr5 = [...arr1, {...obj1}, ...arr3, "x", "y", "z"];
console.log(arr5);

// Spread Operator Challenge
let students2 = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 87, art: 95},
    }
];

let subjects = [...students2[0].subjects];

const update = (item, val) => [...item, val];

let updatedSubjects = update(subjects, "Electronics");
console.log(updatedSubjects);
console.log(subjects);
updatedSubjects = update(updatedSubjects, "Media");
console.log(updatedSubjects);

//----------REST PARAMETER----------

// Regular function call
const sumAll = (a, b, c) => a + b + c;
let sum4 = sumAll(1, 2, 3);
console.log("Sum: ", sum4);

// Extra arguments are ignored
let sum5 = sumAll(1, 2, 3, 4, 5, 6);
console.log("Sum2: ", sum5);

// Function using ...rest
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }

    return sum ;
}

let sum6 = sumRest(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(sum6);

// Rest Challenge
let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];

let moreMixedLetters = [...mixedLetters, 'h', 'k', 'g', 'j', 'i', 'l'];

console.log(moreMixedLetters);

const updateSortReverse = (arr, ...letters) => [...arr, ...letters].sort().reverse();

let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o');

console.log(reverseSort);
console.log(mixedLetters);

//----------DESTRUCTURING----------

// Destructuring arrays
let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
let [john, mary, joe] = ages;
console.log(john, mary, joe);

// Destructuring objects
let jobs = {
    mike: "Designer",
    jill: "Developer",
    alicia: "Accountant",
}

let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese",
};
let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others);

let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "veg",
    andrea: "steak",
};
let {brian, anna, ...rest} = favoriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);

// Destructuring Challenge
let students3 = [
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'John',
        subjects: ['art', 'cad', 'english', 'maths', 'science'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

const makeList = (arr, student) => {
    for(let itm of arr) {
        if(itm.name == student) {
            return itm.subjects;
        }
    }
};

let [first, second, ...rest2] = makeList(students2, 'John');
console.log(first, second, rest2);

//----------MAP()----------

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
    results.push(num * 2);
};
console.log(results);

// Using map()
const multiplyTwo = function (num) {
    return num * 2;
}
const mapResults = nums.map(multiplyTwo);

console.log(mapResults);

// Simplified w/ map()
const simplifiedMap = nums.map(function(num){return num * 2});

console.log(simplifiedMap);

// Simplfied w/ map() + arrow function
const simplifiedArrow = nums.map(num => num * 2);

console.log(simplifiedArrow);

// With objects:
const students4 = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript'
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML'
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS'
    },
  ];

  const nameId = students4.map(student => [student.name, student.id]);

console.log(nameId);

// Map Challenge
let students5 = [
    {
        name: 'James',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

// const mapper = (itm) => [itm.name, itm.results]; Valid when replacing map inner to mapper function.

let [james, ...rest3] = students5.map((itm) => [itm.name, itm.results]);

console.log(james);
console.log(rest3);

//----------FILTER()----------

// Simple Filtering
const people = [
    {
      name: 'Michael',
      age: 23,
    },
    {
      name: 'Lianna',
      age: 16,
    },
    {
      name: 'Paul',
      age: 18,
    },
  ];
  
const oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough);

const paul = people.filter(person => person.name === "Paul");
console.log(paul);
  
// Complex Filtering
const students6 = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 5 },
        { name: 'css', yrsExperience: 3 },
      ]
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 0 },
        { name: 'html', yrsExperience: 4 },
        { name: 'css', yrsExperience: 2 },
      ]
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 1 },
        { name: 'css', yrsExperience: 5 },
      ]
    },
];

const has5YrsExp = skill => skill.yrsExperience >= 5;
const hasStrongSkills = student => student.skills.filter(has5YrsExp).length > 0;

const candidates = students6.filter(hasStrongSkills);

const candidateNames = candidates.map((itm) => [itm.name]);

/** const candidates = students6.filter(student => {
    let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
    return strongSkills.length > 0;
}); Valid with all functions within eachother - inner functions cannot be used elsewhere.
*/ 

console.log(candidates);
console.log(candidateNames);

// Filter Challenge
let students7 = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 84, maths: 97, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 67, english: 87, art: 95},
    }
];

const topMaths = students7.filter(itm => itm.results.maths >= 90);
console.log(topMaths);

//----------REDUCE()----------

// Summing an array of numbers:
const nums1 = [0, 1, 2, 3, 4];
let sum7 = nums1.reduce((acc, curr) => acc + curr, 0);
console.log(sum7);

const teamMembers = [
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    }
  ];
  
  // Totaling a specific object property
  let totalExperience = teamMembers.reduce((acc, curr) => acc+ curr.yrsExperience, 0);
  console.log(totalExperience);
  
  // Grouping by a property, and totaling it too
  let experienceByProfession = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if (!acc[key]) {
        acc[key] = curr.yrsExperience;
    } else {
        acc[key] += curr.yrsExperience;
    }
    return acc;
  }, {});

  console.log(experienceByProfession);

  // Reduce Challenge
  let students8 = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 73, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, english: 88, maths: 97, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

const biggest = students8.reduce((acc, curr) => {
    acc = acc.max > curr.results.english ? acc: {name:curr.name, max:curr.results.english}
    return acc;
    }, {});

console.log(biggest);