var price = 20
var itemName = "Coffee"

var messageToPrint = "The price for your " + itemName + " is $" + price //concatenation
var messageToPrint2 = `The price for your ${itemName} is $${price}` //interpolation

console.log(messageToPrint)
console.log(messageToPrint2)