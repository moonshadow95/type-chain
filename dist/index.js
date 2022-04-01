"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const jong = new Human('jong', 28, 'male');
const hi = (person) => {
    return `HI ${person.name}, you are ${person.age}years old, you are a ${person.gender}.`;
};
console.log(hi(jong));
