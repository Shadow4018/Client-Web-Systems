interface Course {
    name: string;
    duration: number;
    students: string[];
}

class OnlineCourse implements Course {
    name: string;
    duration: number;
    students: string[];

    constructor(name: string, duration: number) {
        this.name = name;
        this.duration = duration;
        this.students = [];
    }

    registerStudent(student: string): void {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
            console.log(`[Registration] Student ${student} successfully added to course "${this.name}".`);
        } else {
            console.log(`[Error] Student ${student} is already registered for course "${this.name}".`);
        }
    }

    isStudentRegistered(student: string): boolean {
        return this.students.includes(student);
    }
}

class CourseManager {
    private courses: Course[] = [];

    addCourse(course: Course): void {
        this.courses.push(course);
        console.log(`[Manager] Course "${course.name}" added to the system.`);
    }

    removeCourse(courseName: string): void {
        this.courses = this.courses.filter(c => c.name !== courseName);
        console.log(`[Manager] Course "${courseName}" removed (if it existed).`);
    }

    // Метод повертає курс або undefined, якщо його не знайдено
    findCourse(courseName: string): Course | undefined {
        return this.courses.find(c => c.name === courseName);
    }
    
    // Додатковий метод для зручного виводу, як вимагає умова
    printAllCourses(): void {
        console.log("\n--- List of all courses ---");
        if (this.courses.length === 0) {
            console.log("No courses available.");
            return;
        }
        
        for (const course of this.courses) {
            const studentList = course.students.length > 0 
                ? course.students.join(", ") 
                : "No registered students";
            console.log(`Course: ${course.name} (${course.duration} hours) | Students: ${studentList}`);
        }
    }
}

console.log("--- Launching Course Manager System ---");
const manager = new CourseManager();

// Створюємо курси
const javaCourse = new OnlineCourse("Java OOP & GRASP", 45);
const pythonCourse = new OnlineCourse("Python Telegram Bots", 30);

// Додаємо в менеджер
manager.addCourse(javaCourse);
manager.addCourse(pythonCourse);

// Реєструємо студентів
console.log("\n--- Student Registration ---");
javaCourse.registerStudent("Bogdan");
javaCourse.registerStudent("Eva");
javaCourse.registerStudent("Bogdan"); // Спроба дублювання

pythonCourse.registerStudent("Bogdan");

// Виводимо всі курси
manager.printAllCourses();

// Тестуємо пошук та видалення
console.log("\n--- Search and Removal ---");
const found = manager.findCourse("Java OOP & GRASP");
if (found) {
    console.log(`Found course: ${found.name}, duration: ${found.duration} hours.`);
}

manager.removeCourse("Python Telegram Bots");
manager.printAllCourses();