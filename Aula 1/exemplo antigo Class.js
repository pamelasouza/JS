function Person (name) {
    this.name = name
}

Person.prototype.say = function(message) {
    console.log(`${this.name} says: ${message}`)
}

const carla = new Person('Carla Crude')
carla.say('Aprendendo javascript <3')


const objetoLiteral = {
    prop1: 1,
    prop2: 2,
    prop3: {
        propDaProp: 'vish'
    }
}

const arrayLiteral = ['e', 'i', 't', 'a']

const now = new Date()