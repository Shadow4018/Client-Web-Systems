interface Animal {
    name: string;
    age?: number;
    move(): void;
    makeSound?(): void;
}

class Cat implements Animal {
    name: string;
    age?: number;

    constructor(name: string, age?: number) {
        this.name = name;
        this.age = age;
    }

    move(): void {
        console.log(`${this.name} runs on four paws.`);
    }

    makeSound(): void {
        console.log(`${this.name} says: Meow!`);
    }
}

class Bird implements Animal {
    name: string;
    canFly: boolean; 

    constructor(name: string, canFly: boolean = true) {
        this.name = name;
        this.canFly = canFly;
    }

    move(): void {
        if (this.canFly) {
            console.log(`${this.name} flies in the sky.`);
        } else {
            console.log(`${this.name} walks on the ground (like a penguin).`);
        }
    }
}

class Fish implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(): void {
        console.log(`${this.name} swims in the water.`);
    }
    // makeSound option, ryba movchyt
}

const myCat = new Cat("Світанок", 3);
const myBird = new Bird("Едмонд Француа ІІ");
const myFish = new Fish("Немо");

console.log("--- Тестування тварин ---");
myCat.move();
if (myCat.makeSound) myCat.makeSound(); 

myBird.move();
myFish.move();