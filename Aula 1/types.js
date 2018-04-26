const string = 'oi eu sou uma string'

const number = 1234

const boolen = true

const nil = null

const array = [1, 2, 4]

const object = { chave: 'valor' }

/* high-order functions */

// funções são podem ser atribuidas a contantes e variaveis
const fun = function() {} 

// funçoes podem ser recebidas como parametro
const doAnyThing = (cb) => cb()

const sayHello = () => console.log('hello')

doAnyThing(sayHello) // hello

// funções podem ser retornadas por outras funções
const sayHelloTo = function (nome) {
    // javascript closure ?!?!?!?!
    return function () {
        console.log(`Hello ${nome}`)
    }
}

const sayHelloToCarla = sayHelloTo('Carla')

sayHelloToCarla() // Hello Carla


// pq diabos usar high order functions ??
const soma = (x, y) => x + y
const increment = x => x + 1

function add (x) {
    return function (y) {
        return x + y
    }
}

const somar = (x, y) => add(x)(y)
const incrementar = add(1)

/// um exemplo

const dadosVindosDaAPI = [ 
    { nome: 'huguinho', idade: 16 },
    { nome: 'zezinho',  idade: 18 },
    { nome: 'luizinho', idade: 20 }
]

const ehMaior = pessoa => { return pessoa.idade > 17 }

const podeEncherACara = function (pessoas) {
    const filtrado = pessoas.filter(ehMaior)
    return filtrado
}

// ----

const arrowFunctionDaFuncaoDeCima = pessoas => 
    pessoas.filter(ehMaior)


console.log(podeEncherACara(dadosVindosDaAPI))


const tudoMaiusculo = str => str.toUpperCase()

const exclamar = str => `${str}!`

const falar = msg => console.log(msg)

const gritar = msg => falar(exclamar(tudoMaiusculo(msg)))

gritar('Por hj é só suas lindas')