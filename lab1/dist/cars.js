"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    brand;
    model;
    vinCode;
    constructor(brand, model, vinCode) {
        this.brand = brand;
        this.model = model;
        this.vinCode = vinCode;
    }
    getVin() {
        return this.vinCode;
    }
}
class Tesla extends Car {
    batteryCapacity;
    constructor(model, vinCode, batteryCapacity) {
        super("Tesla", model, vinCode);
        this.batteryCapacity = batteryCapacity;
    }
    displayInfo() {
        console.log("[Авто]: ${this.brand} ${this.model} | VIN: ${this.getVin()} | Батарея: ${this.batteryCapacity} kWh");
    }
}
class BMW extends Car {
    isMPackage; // приватна властивість тільки для BMW
    constructor(model, vinCode, isMPackage) {
        super("BMW", model, vinCode);
        this.isMPackage = isMPackage;
    }
    displayInfo() {
        const packageInfo = this.isMPackage ? "Так" : "Ні";
        console.log("[Авто]: ${this.brand} ${this.model} | VIN: ${this.getVin()} | M-Пакет: ${packageInfo}");
    }
}
class Toyota extends Car {
    durabilityScore; // захищена властивість
    constructor(model, vinCode, durabilityScore) {
        super("Toyota", model, vinCode);
        this.durabilityScore = durabilityScore;
    }
    displayInfo() {
        console.log("[Авто]: ${this.brand} ${this.model} | VIN: ${this.getVin()} | Оцінка надійності: ${this.durabilityScore}/10");
    }
}
console.log("--- Каталог автомобілів ---");
const tesla1 = new Tesla("Model S", "VIN123456789TES", 100);
const tesla2 = new Tesla("Model 3", "VIN987654321TES", 75);
const bmw1 = new BMW("M5", "VIN111222333BMW", true);
const bmw2 = new BMW("X3", "VIN444555666BMW", false);
const toyota1 = new Toyota("Camry", "VIN777888999TOY", 9);
const toyota2 = new Toyota("Land Cruiser", "VIN000111222TOY", 10);
// Вивід інформації
tesla1.displayInfo();
tesla2.displayInfo();
bmw1.displayInfo();
bmw2.displayInfo();
toyota1.displayInfo();
toyota2.displayInfo();
//# sourceMappingURL=cars.js.map