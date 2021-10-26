const invertirString = string => {
    result = ""
    resultArr = []

    stringArr = string.split("")

    while(stringArr.length > 0) {
        result += stringArr.pop()
    }

    return result
}

stringInvertido = invertirString("hola")

console.log(stringInvertido)