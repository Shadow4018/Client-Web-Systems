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

    // Абстрактний метод для бонусу
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
        console.log("[Виплата] Розробник ${this.name} отримав зарплату: ${this.salary} грн.");
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
        console.log("[Виплата] Менеджер ${this.name} отримав зарплату: ${this.salary} грн.");
    }
}

const employees: Employee[] = [
    new Developer("Олександр", 25, 45000),
    new Developer("Марія", 23, 40000),
    new Manager("Андрій", 35, 70000)
];

let totalAnnualBonus = 0;

console.log("--- Зарплати та бонуси ---");

for (const emp of employees) {
    // Оскільки метод pay() є в Payable, а не в Employee,
    // ми вказуємо компілятору, що в даному випадку emp також є Payable.
    // Це аналог приведення типів у Java: ((Payable) emp).pay();
    (emp as Employee & Payable).pay();
    
    const bonus = emp.getAnnualBonus();
    totalAnnualBonus += bonus;
    
    console.log("Бонус для ${emp.name}: ${bonus} грн.\n");
}

console.log("--------------------------");
console.log("Загальна сума річних бонусів для всіх: ${totalAnnualBonus} грн.");