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

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe ("divisibleByThree",()=>{
    const object1 = { number: 15 }
    const object2 = { number: 0 }
    const object3 = { number: -7 }
    it("returns whether or not given object is divisible by three",()=>{
        expect(divisibleByThree(object1)).toEqual("15 is divisible by three")
        expect(divisibleByThree(object2)).toEqual("0 is divisible by three")
        expect(divisibleByThree(object3)).toEqual("-7 is not divisible by three")
        
        
    })
})
// FAIL  ./code-challenges.test.js
//   divisibleByThree
//     ✕ returns whether or not given object is divisible by three (2 ms)

//   ● divisibleByThree › returns whether or not given object is divisible by three

//     ReferenceError: divisibleByThree is not defined

// b) Create the function that makes the test pass.

//Pseudo:
//Input: Object
//Output: String
// Create a function that takes in object as argument. Then make a conditional statement that determines if the number is divisible by three or not. Then well access value in the object using the built in method Object.values. Then use the modulos operator to determine if the number is divisible by three or not. If the number is divisible by three the string "is divisible by three" will be returned, or the string "is not divisible by three" if not divisible by three.

const divisibleByThree = (value) => {

    if (Object.values(value) %3===0){
        return `${Object.values(value)} is divisible by three`
        
    }
    else {
        return `${Object.values(value)} is not divisible by three`
    }
    
}
const object1 = { number: 15 }
const object2 = { number: 0 }
const object3 = { number: -7 }


console.log(divisibleByThree(object1))
console.log(divisibleByThree(object2))
console.log(divisibleByThree(object3))



// Expected output: "15 is divisible by three"
// Expected output: "0 is divisible by three"
// Expected output: "-7 is not divisible by three"


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe ("allUpperCase",()=>{

    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
     const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]

    it("returns an aray with all words capitalized", () => {
        expect("allUpperCase"(randomNouns1)).toEqual (["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect("allupperCase" (randomNouns2)) .toEqual (["Temperature", "Database", "Chopsticks", "Mango"])
        
    })
})
// FAIL  ./code-challenges.test.js
// divisibleByThree
//   ✓ returns whether or not given object is divisible by three (2 ms)
// allUpperCase
//   ✕ returns an aray with all words capitalized (1 ms)

// ● allUpperCase › returns an aray with all words capitalized

//   TypeError: "allUpperCase" is not a function

// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

//Pseudo:
//Input: array
//Output: array
// create a function that takes in an array. then we will use .map to iterate through the array to access each value at its specific index. Then we will use .charAt to determine the character within each string we want to make upper case. 

const allUpperCase = (arr) =>{
 return arr.map((value)=>{
    return value.charAt(0).toUpperCase() + value.slice(1)
 }) 
}
console.log(allUpperCase(randomNouns1))
console.log(allUpperCase(randomNouns2))

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.


// a) Create a test with expect statements for each of the variables provided.

describe("firstVowel", ()=> {
    const vowelTester1 = "learn"
    const vowelTester2 = "academy"
    const vowelTester3 = "challenges"

    it("returns the index of the first vowel in a string", ()=>{
        expect(firstVowel(vowelTester1)).toEqual(1)
        expect(firstVowel(vowelTester2)).toEqual(0)
        expect(firstVowel(vowelTester3)).toEqual(2)

    })
    
})
// FAIL  ./code-challenges.test.js
//   firstVowel
//     ✕ returns the index of the first vowel in a string (2 ms)

//   ● firstVowel › returns the index of the first vowel in a string

//     ReferenceError: firstVowel is not defined
// Expected output: 1
// Expected output: 0
// Expected output: 2

// b) Create the function that makes the test pass.

//Pseudo:
//input: String
//output: index of the first vowel.
//first we will create a function that takes in the given string, then we will create an array to hold all our vowels, both upper and lower case. then we want this function to loop through each character in our input (str) using a for loop. then to check if each character is a vowel we will use the .includes method on our vowels array. when the vowel is found the function will return its index. 

const vowelTester1 = "learn"
const vowelTester2 = "academy"
const vowelTester3 = "challenges"

const firstVowel = (str) =>{
    let vowels = ["a","e","i","o","u","A","E","I","O","U"]
    for (let i=0; i< str.length; i++){
        if (vowels.includes(str[i])){
            return i;
        }
    }

}
console.log(firstVowel(vowelTester1))
console.log(firstVowel(vowelTester2))
console.log(firstVowel(vowelTester3))