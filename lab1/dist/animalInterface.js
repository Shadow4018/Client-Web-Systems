"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cat {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    move() {
        console.log(`${this.name} runs on four paws.`);
    }
    makeSound() {
        console.log(`${this.name} says: Meow!`);
    }
}
class Bird {
    name;
    canFly;
    constructor(name, canFly = true) {
        this.name = name;
        this.canFly = canFly;
    }
    move() {
        if (this.canFly) {
            console.log(`${this.name} flies in the sky.`);
        }
        else {
            console.log(`${this.name} walks on the ground (like a penguin).`);
        }
    }
}
class Fish {
    name;
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(`${this.name} swims in the water.`);
    }
}
//# sourceMappingURL=animalInterface.js.map