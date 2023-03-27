// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Bravo 2023"
//console.log(cohort.split(""))
 
// a) Your answer: We're using the .split command so this should separate every letter of the given string to look like "B", "r", "a", "v" ...
// b) Verify and explain: The built in method split will separate each character from the given string and put them into their own array. when switching an array to a string we would use .join, but in this case we are going from a string to an array so we will use .split. This will log the code [ "B", "r", "a", "v" ...]

// --------------------2) What will this log?

const greeter = (name) => {
   `Hello, ${name}!`
}
//console.log(greeter("LEARN Student"))

// a) Your answer: I think this code will log undefined because the return statement is not declared.
// b) Verify and explain: The method as is logs undefined. if the desired oucome is Hello LEARN Student! then we would need to add the word return to line 19 before `Hello, ${name}!` Because the given code logged undefined, I suspected that the problem was in the functions return statement, or lack ther of.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
//console.log(multipliedByTwo)

// a) Your answer: I originally thought this would log undefined because there is no return statement. It turns out this is refactored code and the higher order function .map will work as intended. This should return an array of every number multiplied by 2.
// b) Verify and explain: This logs every number in the array by two. Because we used map the new array will be the same size as the original. We used the .map higher order function with a parameter of number. This is because the numbers from the array are what we want mapped, and multiplied by 2.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
//console.log(onlyOdds)

// a) Your answer: This should log an array of 11, 13, and 15. Filter returns a new array of different size, where as map returns an array of equal size. 
// b) Verify and explain: This logged only the odd numbers from the array. The higher order function .filter returns a new array of smaller size, a subset array. The modulos of 2 !==0 is used because we want the odd numbers to be returned. If we wanted the even number we would use %2 ===0.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
//console.log(myCodingSkills.languages[0])

// a) Your answer: I think this code will return the string "Javascript". We logged the object language and we wanted the 0 position.
// b) Verify and explain: This function will log the string "JavaScript" we called the object language at the 0 index. If we would have called it at the index of 1 it would have logged the string "Ruby".

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Bravo"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
 console.log(learnStudent)

// a) Your answer: I think this will basically replace name in line 59 with George. So the output will be George, Bravo, 2023
// b) Verify and explain:This logged -  Learn { student: 'George', cohort: 'Bravo', year: 2023 } If we wanted to get George Bravo 2023 we could create a description method and use the sentence syntax with the objects included in the appropriate order. It should look something like this --->

// class Learn {
//   constructor(name) {
//     this.student = name
//     this.cohort = "Bravo"
//     this.year = 2023
//   }
//   description(){
//     return `${this.student} is a student in ${this.cohort} in ${this.year}`
//   }

// }
// const learnStudent = new Learn("George")
//  console.log(learnStudent)
//  console.log(learnStudent.description())