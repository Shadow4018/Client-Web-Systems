"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    title;
    author;
    isBorrowed = false;
    pages;
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    borrow() {
        this.isBorrowed = true;
        console.log(`[Borrow] Book "${this.title}" (${this.pages} pages) borrowed.`);
    }
}
class Magazine {
    title;
    author;
    isBorrowed = false;
    issueNumber;
    constructor(title, author, issueNumber) {
        this.title = title;
        this.author = author;
        this.issueNumber = issueNumber;
    }
    borrow() {
        this.isBorrowed = true;
        console.log(`[Borrow] Magazine "${this.title}" (Issue #${this.issueNumber}) borrowed.`);
    }
}
class DVD {
    title;
    author;
    isBorrowed = false;
    duration;
    constructor(title, author, duration) {
        this.title = title;
        this.author = author;
        this.duration = duration;
    }
    borrow() {
        this.isBorrowed = true;
        console.log(`[Borrow] DVD "${this.title}" (${this.duration} mins) borrowed.`);
    }
}
class Library {
    items = [];
    addItem(item) {
        this.items.push(item);
        console.log(`[Library] Item added to catalog: "${item.title}".`);
    }
    findItemByName(name) {
        return this.items.find(item => item.title === name);
    }
    // Метод для виведення списку ДОСТУПНИХ елементів
    printAvailableItems() {
        console.log("\n--- Available items in the library ---");
        // Фільтруємо лише ті, які ще не позичені
        const available = this.items.filter(item => !item.isBorrowed);
        if (available.length === 0) {
            console.log("All items are currently checked out.");
            return;
        }
        for (const item of available) {
            console.log(`- "${item.title}" (Author: ${item.author})`);
        }
        console.log("---------------------------------------");
    }
}
console.log("=== Opening the library ===");
const myLibrary = new Library();
// Створення елементів
const javaBook = new Book("Head First Java", "Kathy Sierra", 720);
const techMag = new Magazine("Wired", "Різні автори", 315);
const matrixDVD = new DVD("The Matrix", "Wachowskis", 136);
// Додавання до каталогу
myLibrary.addItem(javaBook);
myLibrary.addItem(techMag);
myLibrary.addItem(matrixDVD);
// Перегляд доступних матеріалів
myLibrary.printAvailableItems();
console.log("\n=== Симуляція видачі ===");
// Знаходимо і позичаємо книгу
const foundBook = myLibrary.findItemByName("Head First Java");
if (foundBook) {
    foundBook.borrow();
}
// Позичаємо журнал напряму
techMag.borrow();
// Знову переглядаємо наявність
myLibrary.printAvailableItems();
//# sourceMappingURL=library.js.map