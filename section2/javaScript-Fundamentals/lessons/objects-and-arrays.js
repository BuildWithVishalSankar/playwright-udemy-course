//objects

var customer = {
    firstName: "John",
    lastName: "Doe",
    cars: ["Toyota", "Porsche", "Pagani"]
}

console.log("Customer Object in JS:", customer)
console.log("Customer Name: ", customer.firstName + ' ' + customer.lastName)

//Dot notation
customer.firstName = 'Mike'
//bracket notation
customer['lastName'] = 'Shinoda'
console.log(`New Customer name: ${customer.firstName} ${customer.lastName}`)

//arrays
var car = ["Toyota", "Porsche", "Pagani"]
console.log("First car in the array " + car[0])
car[0] = "BMW"
console.log("First car in the array after update: " + car[0])
console.log(`${customer.firstName} ${customer.lastName}'s first car: ${customer.cars[0]}`)