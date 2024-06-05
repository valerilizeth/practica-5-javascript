// ------ ejercicio de lectura y escritura -----
const mostrarValor = () => {
    // getElementById = obtener Elemento por el ID
    const input1 = document.getElementById('valor1')

    let valor1 = input1.value
    console.log(valor1)
    console.log("mostrando valor")

    const span = document.getElementById('input-valor')
    console.log(span)
    console.log(span.innerHTML)
    span.innerHTML = valor1
}

// ------ Calculadora ---------

// leerInputs debe leer dos inputs, validarlos
// y devolver estos valores
const leerInputs = () => {
    console.log("leyendo inputs...")
    // obtenemos las etiquetas inputs
    let inputNumero1 = document.getElementById('input-numero-1')
    let inputNumero2 = document.getElementById('input-numero-2')

    // obtenemos los valores de los inputs
    let numero1 = inputNumero1.value
    let numero2 = inputNumero2.value
    console.log("valores desde el input", numero1, numero2)

    // validar que no esten vacios
    if (numero1 === '') {
        // anunciar un error
        alert("El valor 1 no existe o contiene caracteres no numericos")
        // interrumpir la ejecucion
        return null
    }

    if (numero2 === '') {
        // anunciar un error
        alert("El valor 2 no existe o contiene caracteres no numericos")
        // interrumpir la ejecucion
        return null
    }

    // parse - cambiar el tipo de dato
    numero1 = parseInt(numero1)
    numero2 = parseInt(numero2)
    console.log(numero1, numero2)

    const numerosValidados = {
        numero1: numero1,
        numero2: numero2
    }

    return numerosValidados

    // esta es otra forma de devolver un JSON
    // return {
    //     numero1: numero1,
    //     numero2: numero2
    // }
}

// realizarOperacion debe recibir el tipo de
// operacion, realizar la operacion con los dos
// valores de los inputs
const realizarOperacion = (operacion) => {
    const numeros = leerInputs()
    if (numeros === null) {
        return
    }

    console.log(operacion, "con los numeros:", numeros.numero1, "y", numeros.numero2)

    let resultado = 0
    // validar la operacion
    if (operacion === 'suma') {
        resultado = numeros.numero1 + numeros.numero2
    }

    if (operacion === 'resta') {
        resultado = numeros.numero1 - numeros.numero2
    }

    if (operacion === 'multiplicacion') {
        resultado = numeros.numero1 * numeros.numero2
    }

    if (operacion === 'division') {
        resultado = numeros.numero1 / numeros.numero2
    }

    // console.log("resultado:", resultado)
    mostrarResultado(resultado, operacion)
    
}

// mostrarResultado debe recibir el resultado
// de la operacion y mostrarlo al usuario,
// ademas debe modificar el simbolo de operacion
// que se realizo
const mostrarResultado = (resultado, operacion) => {
    console.log(resultado)
    const spanResultado = document.getElementById('resultado')
    spanResultado.innerText = resultado

    const spanOperacion = document.getElementById('operacion')

    if (operacion === 'suma') {
        spanOperacion.innerText = '+'
    }

    if (operacion === 'resta') {
        spanOperacion.innerText = '-'
    }

    if (operacion === 'multiplicacion') {
        spanOperacion.innerText = 'x'
    }

    if (operacion === 'division') {
        spanOperacion.innerText = '/'
    }
}





