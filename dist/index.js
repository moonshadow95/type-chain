"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: 'Jong',
    age: 28,
    gender: 'male'
};
const hi = (person) => {
    return `HI ${person.name}, you are ${person.age}years old, you are a ${person.gender}.`;
};
console.log(hi(person));
