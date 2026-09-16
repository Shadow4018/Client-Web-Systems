abstract class Car {
    public brand: string;
    protected model: string;
    private vinCode: string;

    constructor(brand: string, model: string, vinCode: string) {
        this.brand = brand;
        this.model = model;
        this.vinCode = vinCode;
    }

    protected getVin(): string {
        return this.vinCode;
    }

    abstract displayInfo(): void;
}

class Tesla extends Car {
    public batteryCapacity: number;

    constructor(model: string, vinCode: string, batteryCapacity: number) {
        super("Tesla", model, vinCode);
        this.batteryCapacity = batteryCapacity;
    }

    displayInfo(): void {
        console.log(`[Авто]: ${this.brand} ${this.model} | VIN: ${this.getVin()} | Батарея: ${this.batteryCapacity} kWh`);
    }
}

class BMW extends Car {
    private isMPackage: boolean; // приватна властивість тільки для BMW

    constructor(model: string, vinCode: string, isMPackage: boolean) {
        super("BMW", model, vinCode);
        this.isMPackage = isMPackage;
    }

    displayInfo(): void {
        const packageInfo = this.isMPackage ? "Так" : "Ні";
        console.log(`[Авто]: ${this.brand} ${this.model} | VIN: ${this.getVin()} | M-Пакет: ${packageInfo}`);
    }
}

class Toyota extends Car {
    protected durabilityScore: number; // захищена властивість

    constructor(model: string, vinCode: string, durabilityScore: number) {
        super("Toyota", model, vinCode);
        this.durabilityScore = durabilityScore;
    }

    displayInfo(): void {
        console.log(`[Авто]: ${this.brand} ${this.model} | VIN: ${this.getVin()} | Оцінка надійності: ${this.durabilityScore}/10`);
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