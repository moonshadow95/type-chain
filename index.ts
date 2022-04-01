const myName = "Jong",
    age = 28,
    gender = 'male'

const hi = (myName, age, gender?) => {
    console.log(`HI ${myName}, you are ${age}years old, you are a ${gender}.`)
}

hi(myName, age, gender)

export {};