// Declare class
class Student{
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
        this.lateComing = 0
        this.score = []
    }

    // Create instance method
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`
    }

    lateComingCount(){
        if(this.lateComing == 3){
            return `You are not allowed to enter class until giving valid reason`
        }
        this.lateComing += 1
        return `You are late for ${this.lateComing} times`
    }

    addScore(score){
        this.score.push(score)
    }

    getAverageScore(){
        let total = this.score.reduce((a, b) => a + b)
        return (total/this.score.length).toFixed(2)
    }

    // Class method (Start with static keyword)
    static enrollStudents(){
        return `All students are enrolled for this course`
    }
}

// Create new instance from that class
let haresh = new Student("Haresh", "Gayakhe")
let john = new Student("John", "Doe", 28)

// Access instance
// console.log(haresh)
// console.log(john)

// Add other fields
// haresh.age = 27
// console.log(haresh)

// Access instance method
console.log(haresh.fullName())

console.log(haresh.lateComingCount())
console.log(haresh.lateComingCount())
console.log(haresh.lateComingCount())
console.log(haresh.lateComingCount())

haresh.addScore(87)
haresh.addScore(98)

console.log(haresh.getAverageScore())

console.log(haresh)


// Access class method
console.log(Student.enrollStudents())