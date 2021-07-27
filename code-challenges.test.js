// ASSESSMENT 3: Coding practical questions with Jest
// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process


// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

//PROCESS:
    //describe the name of the function - fibArray
    //it method that describes what the function does - takes in a number greater than 2 and returns an array of that length containing the numbers of the Fibonacci.
    //expect the input of 6 to output: [1, 1, 2, 3, 5, 8] and the input of 10 to output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    var num1 = 6
    var num2 = 10

    describe("fibArray", () => {
        it("takes a number greater than 2 and returns an array of that length containing the numbers of the Fibonacci", () => {
            expect(fibArray(num1)).toEqual([1, 1, 2, 3, 5, 8])
            expect(fibArray(num2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
        })
    })

// b) Create the function that makes the test pass.
//PROCESS:
    //declare a function named fibArray that takes in a number greater than 2 and returns an array of length of number of the Fibonacci.
    //create a for loop that will iterate at the length of the number 
    //push into empty array.. ?

    const fibArray = (number) {
       let fibbed = []
        for(let i=2; i<number; i++){
            fibbed.push()
        }
    }

//I saved this one for last and couldnt figure it out on time. :/
    


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

//PROCRESS:
    //describe the name of the function - onlyOddNums
    //it method that describes what the function does - takes in an array of data and outputs odd numbers sorted from least to greatest
    //expect the input of fullArr1 to output: [-9, 7, 9, 199] and the input of fullArr2 to output: [-823, 7, 23]

    describe("onlyOddNums", () => {
        it("takes in an array of data and returns only odd numbers sorted from least to greatest", () => {
            expect(onlyOddNums(fullArr1)).toEqual([-9, 7, 9, 199])
            expect(onlyOddNums(fullArr2)).toEqual([-823, 7, 23])
        })
    })
    
// b) Create the function that makes the test pass.
//PROCESS:
    //declare a function named onlyOddNums that takes in an array
    //use .filter() to filter through array and return only odd numbers 
    //return newArray .sort((a,b) => a-b);

const onlyOddNums = (array) => {
    let newArray = array.filter(value => typeof value === "number" && value % 2 != 0)
    return newArray.sort((a, b) => a - b)
}      


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []

//PROCRESS:
    //describe the name of the function - accSum
    //it method that describes what the function does - takes in an array and returns an array of the accumulating sum.
    //expect the input numbersToAdd1 to output: [2, 4, 45, 9], input of numbersToAdd2 to output: [0, 7, -8, 12], and input of numbersToAdd3 to output:[]

    describe("accSum", () => {
        it("takes in an array and returns an array of the accumulating sum", () => {
            expect(accSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
            expect(accSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
            expect(accSum(numbersToAdd3)).toEqual([])
        } )
    })
    
// b) Create the function that makes the test pass.
//PROCESS:
    //declare a function named accSum that takes in a number
    //if array.length is < 1 , return empty array[]
    //declare a variable named sumNum that holds the array at the index of 0
    //use for loop to loop through the array starting at the index of 1
    //have sumNum at its current index equal to the array at its current index + sumNum at its index minus 1
    //return sumNum

    const accSum = (array) => {
        if(array.length <1){
            return []
        }
        let sumNum = [array[0]]
        for(let i=1; i<array.length; i++){
            sumNum[i] = array[i] + sumNum[i-1]
         }
          return sumNum
     }

