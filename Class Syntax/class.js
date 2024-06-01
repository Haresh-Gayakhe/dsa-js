// Declare class
class Student{
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
}

// Create new instance from that class
let haresh = new Student("Haresh", "Gayakhe")
let john = new Student("John", "Doe", 28)

// Access instance
console.log(haresh)
console.log(john)

// Add other fields
haresh.age = 27
console.log(haresh)