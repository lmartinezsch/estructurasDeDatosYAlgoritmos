const reverseString = text => {
    return text.split("").reverse().join("")
}


let stringInvertido = reverseString("hola me llamo leandro")
console.log(stringInvertido)