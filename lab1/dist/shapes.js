"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
    scale(factor) {
        this.radius *= factor;
    }
}
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
    scale(factor) {
        this.width *= factor;
        this.height *= factor;
    }
}
class Triangle {
    a;
    b;
    c;
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getArea() {
        const p = this.getPerimeter() / 2; // напівпериметр
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    }
    getPerimeter() {
        return this.a + this.b + this.c;
    }
    scale(factor) {
        this.a *= factor;
        this.b *= factor;
        this.c *= factor;
    }
}
const shapesArray = [
    new Circle(5),
    new Rectangle(4, 6),
    new Triangle(3, 4, 5) // Єгипетський трикутник
];
let totalArea = 0;
let totalPerimeter = 0;
console.log("--- Shape info ---");
for (const shape of shapesArray) {
    totalArea += shape.getArea();
    totalPerimeter += shape.getPerimeter();
    // Використовуємо .toFixed(2) щоб округлити до 2 знаків після коми
    console.log("Площа: ${shape.getArea().toFixed(2)}, Периметр: ${shape.getPerimeter().toFixed(2)}");
}
console.log("----------------------------");
console.log("ЗАГАЛЬНА ПЛОЩА: ${totalArea.toFixed(2)}");
console.log("ЗАГАЛЬНИЙ ПЕРИМЕТР: ${totalPerimeter.toFixed(2)}");
console.log("\n--- Після масштабування (х2) ---");
shapesArray[1].scale(2);
console.log("Нова площа прямокутника: ${shapesArray[1]!.getArea().toFixed(2)}");
//# sourceMappingURL=shapes.js.map