const factorial = number => {

    if (number === 0 || number === 1) {
        console.log("Factorial de " + number + " es: 1")

        return 1
    } else {
        resultado = number * factorial(number - 1)
        console.log("Factorial de " + number + " es: " + resultado)

        return resultado
    }

}

factorial(5)