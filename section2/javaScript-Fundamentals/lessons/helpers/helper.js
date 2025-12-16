export function printAge(age) {
    console.log("Age is: ", age)
}

class CustomerDetails {
    printFirstName(firstName) {
        console.log(firstName)
    }
    /**
     * This method will print the last name
     * @param {String} lastName
     */
    printLastName(lastName) {
        console.log(lastName)
    }
}

export const customerDetails = new CustomerDetails()