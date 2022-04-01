interface Human {
    name: string
    age: number
    gender: string
}

const person = {
    name: 'Jong',
    age: 28,
    gender: 'male'
}
const hi = (person: Human): string => {
    return `HI ${person.name}, you are ${person.age}years old, you are a ${person.gender}.`
}

console.log(hi(person))

export {};