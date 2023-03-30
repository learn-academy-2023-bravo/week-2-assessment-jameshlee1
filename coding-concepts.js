// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

// const cohort = "Bravo 2023"
// console.log(cohort.split(""))

// a) Your answer: it will split every character in the string "B, r, a, v, o, 2, 0, 2, 3"
// b) Verify and explain:  by using the build in method split will take the original string and return the letters in a separate array.

// --------------------2) What will this log?

// const greeter = (name) => {
//   `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))

// a) Your answer: error or undefined
// b) Verify and explain: there is no value or statement of name. the code is asking the if called greeters it needs to return the Hello, LEARN Student" we need to create a return. 

// --------------------3) What will this log?

// const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: this will return all the numbers multiplied by 2.
// b) Verify and explain: the map will use the high order or function with a parameter or number then return the array multiplied by two.

// --------------------4) What will this log?

// const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// // console.log(onlyOdds)

// a) Your answer: all the numbers will by odd numbers.
// b) Verify and explain: filter will take the original array then return an array with module of 2 !==0 giving us only the odd numbers.

// --------------------5) What will this log?

// const myCodingSkills = {
//   languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub"
// }
// console.log(myCodingSkills.languages[0])

// a) Your answer: Javascript
// b) Verify and explain: javascript has property name languages which is the array. the index 0 which is javascript and index 1 would be ruby.

// --------------------STRETCH: What will this log?

// class Learn {
//   constructor(name) {
//     this.student = name
//     this.cohort = "Bravo"
//     this.year = 2023
//   }
// }
// const learnStudent = new Learn("George")
// // console.log(learnStudent)

// // a) Your answer: 
// // b) Verify and explain: