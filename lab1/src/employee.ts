interface Payable {
    pay(): void;
}

abstract class Employee {
    public name: string;
    public age: number;
    public salary: number;

    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    abstract getAnnualBonus(): number;
}

class Developer extends Employee implements Payable {
    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }

    getAnnualBonus(): number {
        return this.salary * 0.10; // Бонус 10%
    }

    pay(): void {
        console.log("[Payment] Developer ${this.name} received salary: ${this.salary} UAH.");
    }
}

class Manager extends Employee implements Payable {
    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }

    getAnnualBonus(): number {
        return this.salary * 0.20; // Бонус 20%
    }

    pay(): void {
        console.log("[Payment] Manager ${this.name} received salary: ${this.salary} UAH.");
    }
}

const employees: Employee[] = [
    new Developer("Arnold", 25, 45000),
    new Developer("Mari", 23, 40000),
    new Manager("Nira", 35, 70000)
];

let totalAnnualBonus = 0;

console.log("--- Salaries and Bonuses ---");

for (const emp of employees) {
    // Оскільки метод pay() є в Payable, а не в Employee,
    // ми вказуємо компілятору, що в даному випадку emp також є Payable.
    // Це аналог приведення типів у Java: ((Payable) emp).pay();
    (emp as Employee & Payable).pay();
    
    const bonus = emp.getAnnualBonus();
    totalAnnualBonus += bonus;
    
    console.log("Bonus for ${emp.name}: ${bonus} UAH.\n");
}

console.log("--------------------------");
console.log("Total annual bonuses for all: ${totalAnnualBonus} UAH.");