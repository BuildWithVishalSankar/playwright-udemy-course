var firstName = "Vishal"
let lastName = "K M"
console.log(firstName + ' ' + lastName)

var currentAge, dob, gender;
currentAge = '22'
gender = "Male"
console.log(currentAge)
currentAge = '23'
console.log(currentAge) //variables can be reassigned

const occupation = "Engineer"
// occupation = "Trader"
/* Line number 13 would Throw the following error: 
TypeError: Assignment to constant variable.
    at Object.<anonymous> (/Users/p10/Documents/GitHub/playwright-udemy-course/section2/javaScript-Fundamentals/lessons/variables.js:13:12)
    at Module._compile (node:internal/modules/cjs/loader:1469:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1548:10)
    at Module.load (node:internal/modules/cjs/loader:1288:32)
    at Module._load (node:internal/modules/cjs/loader:1104:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
    at node:internal/main/run_main_module:28:49
*/
console.log(occupation)


//data types

var middleName = "Sankar"       //string
var age = 20                    //number
var isMarried = false           //boolean
var yearsInMarriage = null      //null
var numberOfCars = undefined    //undefined