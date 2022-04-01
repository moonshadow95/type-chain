const hi = (myName: string, age: number, gender: string): string => {
    return `HI ${myName}, you are ${age}years old, you are a ${gender}.`
}

console.log(hi("Jong", 28, 'male'))

export {};