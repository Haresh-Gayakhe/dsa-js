// Parent class
class Animal {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log(`${this.name} is walking.`);
    }
}

// Child class inheriting from Animal
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the parent constructor
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} is barking.`);
    }
}

// Creating instances of Animal and Dog
let animal = new Animal('Generic Animal');
let dog = new Dog('Buddy', 'Golden Retriever');

// Using methods from Animal class
animal.walk(); // Outputs: Generic Animal is walking.

// Using methods from Dog class
dog.walk(); // Outputs: Buddy is walking.
dog.bark(); // Outputs: Buddy is barking.
