helloOne()

function helloOne() {
    console.log("Hello One")
}

helloOne()

//anonymous function
var helloTwo = function () {
    console.log("Hello Two")
}

helloTwo()

//ES6 syntax for arrow function

var helloThree = () => {
    console.log("Hello Three")
}

helloThree()

function multiplyByTwo(num) {
    return num * 2
}

console.log(multiplyByTwo(4))

function printName(firstName, lastName) {
    console.log(firstName + " " + lastName)
}

printName("John", "Doe")

//import function
import { printAge } from "./helpers/helper.js"
printAge(20)

//import everything
import * as helper from "./helpers/helper.js"
helper.printAge(25)