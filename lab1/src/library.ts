interface LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean;
    borrow(): void;
}

class Book implements LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean = false;
    pages: number;

    constructor(title: string, author: string, pages: number) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    borrow(): void {
        this.isBorrowed = true;
        console.log(`[Borrow] Book "${this.title}" (${this.pages} pages) borrowed.`);
    }
}

class Magazine implements LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean = false;
    issueNumber: number;

    constructor(title: string, author: string, issueNumber: number) {
        this.title = title;
        this.author = author;
        this.issueNumber = issueNumber;
    }

    borrow(): void {
        this.isBorrowed = true;
        console.log(`[Borrow] Magazine "${this.title}" (Issue #${this.issueNumber}) borrowed.`);
    }
}

class DVD implements LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean = false;
    duration: number;

    constructor(title: string, author: string, duration: number) {
        this.title = title;
        this.author = author;
        this.duration = duration;
    }

    borrow(): void {
        this.isBorrowed = true;
        console.log(`[Borrow] DVD "${this.title}" (${this.duration} mins) borrowed.`);
    }
}

class Library {
    private items: LibraryItem[] = [];

    addItem(item: LibraryItem): void {
        this.items.push(item);
        console.log(`[Library] Item added to catalog: "${item.title}".`);
    }

    findItemByName(name: string): LibraryItem | undefined {
        return this.items.find(item => item.title === name);
    }

    // Метод для виведення списку ДОСТУПНИХ елементів
    printAvailableItems(): void {
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