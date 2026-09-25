"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    name;
    age;
    salary;
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
}
class Developer extends Employee {
    constructor(name, age, salary) {
        super(name, age, salary);
    }
    getAnnualBonus() {
        return this.salary * 0.10; // Бонус 10%
    }
    pay() {
        console.log("[Payment] Developer ${this.name} received salary: ${this.salary} UAH.");
    }
}
class Manager extends Employee {
    constructor(name, age, salary) {
        super(name, age, salary);
    }
    getAnnualBonus() {
        return this.salary * 0.20; // Бонус 20%
    }
    pay() {
        console.log("[Payment] Manager ${this.name} received salary: ${this.salary} UAH.");
    }
}
const employees = [
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
    emp.pay();
    const bonus = emp.getAnnualBonus();
    totalAnnualBonus += bonus;
    console.log("Bonus for ${emp.name}: ${bonus} UAH.\n");
}
console.log("--------------------------");
console.log("Total annual bonuses for all: ${totalAnnualBonus} UAH.");
//# sourceMappingURL=employee.js.map