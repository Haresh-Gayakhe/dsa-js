class Person{
    constructor(name, gender){
        this.name = name,
        this.gender = gender
    }

    walking(){
        console.log(this.name + " Is walking around.")
    }
}

const haresh = new Person("Haresh", "Male")
console.log(haresh)