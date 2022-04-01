class Human {
    public name: string
    public age: number
    public gender: string

    constructor(name: string, age: number, gender: string) {
        this.name = name
        this.age = age
        this.gender = gender
    }
}

interface Human {
    name: string
    age: number
    gender: string
}

const jong = new Human('jong', 28, 'male')
const hi = (person: Human): string => {
    return `HI ${person.name}, you are ${person.age}years old, you are a ${person.gender}.`
}

console.log(hi(jong))

export {};