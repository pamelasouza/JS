class Person {
    constructor(name) {
        this.name = name
    }

    say(message) {
        console.log(`${this.name} says: ${message}`)
    }
}

const carla = new Person('Carla Crude')
carla.say('Aprendendo javascript <3')

