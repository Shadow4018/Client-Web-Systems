"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OnlineCourse {
    name;
    duration;
    students;
    constructor(name, duration) {
        this.name = name;
        this.duration = duration;
        this.students = []; // ініціалізуємо порожній масив студентів
    }
    registerStudent(student) {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
            console.log(`[Registration] Student ${student} successfully added to course "${this.name}".`);
        }
        else {
            console.log(`[Error] Student ${student} is already registered for course "${this.name}".`);
        }
    }
    isStudentRegistered(student) {
        return this.students.includes(student);
    }
}
class CourseManager {
    courses = [];
    addCourse(course) {
        this.courses.push(course);
        console.log(`[Менеджер] Курс "${course.name}" додано до системи.`);
    }
    removeCourse(courseName) {
        // Фільтруємо масив, залишаючи всі курси, крім того, який треба видалити
        this.courses = this.courses.filter(c => c.name !== courseName);
        console.log(`[Менеджер] Курс "${courseName}" видалено (якщо він існував).`);
    }
    // Метод повертає курс або undefined, якщо його не знайдено
    findCourse(courseName) {
        return this.courses.find(c => c.name === courseName);
    }
    // Додатковий метод для зручного виводу, як вимагає умова
    printAllCourses() {
        console.log("\n--- Список усіх курсів ---");
        if (this.courses.length === 0) {
            console.log("Курсів немає.");
            return;
        }
        for (const course of this.courses) {
            const studentList = course.students.length > 0
                ? course.students.join(", ")
                : "Немає зареєстрованих студентів";
            console.log(`Курс: ${course.name} (${course.duration} год) | Студенти: ${studentList}`);
        }
    }
}
console.log("--- Запуск системи Course Manager ---");
const manager = new CourseManager();
// Створюємо курси
const javaCourse = new OnlineCourse("Java OOP & GRASP", 45);
const pythonCourse = new OnlineCourse("Python Telegram Bots", 30);
// Додаємо в менеджер
manager.addCourse(javaCourse);
manager.addCourse(pythonCourse);
// Реєструємо студентів
console.log("\n--- Реєстрація студентів ---");
javaCourse.registerStudent("Богдан");
javaCourse.registerStudent("Олена");
javaCourse.registerStudent("Богдан"); // Спроба дублювання
pythonCourse.registerStudent("Богдан");
// Виводимо всі курси
manager.printAllCourses();
// Тестуємо пошук та видалення
console.log("\n--- Пошук та видалення ---");
const found = manager.findCourse("Java OOP & GRASP");
if (found) {
    console.log(`Знайдено курс: ${found.name}, тривалість: ${found.duration} год.`);
}
manager.removeCourse("Python Telegram Bots");
manager.printAllCourses();
//# sourceMappingURL=courses.js.map