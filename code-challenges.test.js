// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

// First, I will create a Jest testing statement using describe, taking in my functions name, "divisibleByThree", and an anonymous function with an it statement. That statement will describe my function's purpose, and have another anonymous function with an expect statement. That expect statement will take in a function call, and use .toEqual() with my expected test results inside. 

describe ("divisibleByThree",()=>{
    const objectOne = { number: 15 }
    const objectTwo = { number: 0 }
    const objectThree = { number: -7 }
    it("returns whether or not given object is divisible by three",()=>{
        expect(divisibleByThree(objectOne)).toEqual("15 is divisible by three")
        expect(divisibleByThree(objectTwo)).toEqual("0 is divisible by three")
        expect(divisibleByThree(objectThree)).toEqual("-7 is not divisible by three")
        
        
    })
})



// b) Create the function that makes the test pass.

// Now, to create the function, I will call it divisibleByThree, and have it take in an object as a parameter.
// I will use dot notation to extract the value from the number key in the object, and then use a modulo operator within a conditional statement to check if the number is divisible by three. If it is, I will use string interpolation to return a statement confirming it is divisible by three, and an opposite result if it is not. 

const divisibleByThree = (value) => {

    if (Object.values(value) %3===0){
        return `${Object.values(value)} is divisible by three`
        
    }
    else {
        return `${Object.values(value)} is not divisible by three`
    }
    
}
const objectOne = { number: 15 }
const objectTwo = { number: 0 }
const objectThree = { number: -7 }


console.log(divisibleByThree(objectOne));
console.log(divisibleByThree(objectTwo));
console.log(divisibleByThree(objectThree));



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
// First, I will create a Jest testing statement using describe, taking in my functions name, "allToCaps", and an anonymous function with an it statement. That statement will describe my function's purpose, and have another anonymous function with an expect statement. That expect statement will take in a function call, and use .toEqual() with my expected test results inside. I will also have one more expect statements for the other case.

describe("allToCaps", () => {
    it("takes in an array of words and returns an array with all the words capitalized", () => {
        const randomNounsOne = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNounsTwo = ["temperature", "database", "chopsticks", "mango"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
        expect(allToCaps(randomNounsOne)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(allToCaps(randomNounsTwo)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})

// b) Create the function that makes the test pass.

// I will create a function called alltoCaps, which will take an array as an argument. Then I will use the map higher order function to make every index in the array capitalized. I will do this by first taking the  0th index character of the string, using.toUpperCase on it, then adding the rest of the string by slicing the 1st index forward. I then return the new mapped array.

const allToCaps = (array) => {
    return array.map(value => value[0].toUpperCase() + value.slice(1))
}


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.
// First, I will create a Jest testing statement using describe, taking in my functions name, "firstVowel", and an anonymous function with an it statement. That statement will describe my function's purpose, and have another anonymous function with an expect statement. That expect statement will take in a function call, and use .toEqual() with my expected test results inside. I will also have two more expect statements for the other cases.

describe("vowelIndex", () => {
      it("Function will take in the strings learn, academy, challenges and return the index location of the first vowel in each string", () => {
        expect(vowelIndex("learn")).toEqual(1)
        expect(vowelIndex("academy")).toEqual(0)
        expect(vowelIndex("challenges")).toEqual(2)
      })
    })

const vowelTesterOne = "learn"
// Expected output: 1
const vowelTesterTwo = "academy"
// Expected output: 0
const vowelTesterThree = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.

// I will create a function called firstVowel that will take in a string as an argument. Next, I will create a for loop that will iterate through each index of the string, until a vowel is found or the string ends, and take the index of the first vowel found and save it to a variable. Then if an index was found, return it, otherwise return a string saying no vowel was found.

const vowelIndex = (string) => {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  for(i = 0; i < string.length; i++){
      if(vowels.includes(string[i]))
      return i
  }}