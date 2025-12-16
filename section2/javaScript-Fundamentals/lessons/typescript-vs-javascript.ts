var customerFirstName: string = "Vishal"
var customerLastName: string = "Sankar"
var customerAge: number = 22

type Customer = { firstName: string, lastName: string, age: number, active: boolean }
var firstCustomer: Customer = {
    firstName: "John",
    lastName: "Doe",
    age: 23,
    active: true
}

// In TypeScript, we explicitly declare types for variables and objects,
// while JavaScript determines types dynamically at runtime.

// TypeScript uses static typing (checked at compile time),
// whereas JavaScript uses dynamic typing (checked at runtime).

// TypeScript requires explicit type annotations, unlike JavaScript.

// TypeScript adds optional static typing on top of JavaScript
// to catch type errors during development.
