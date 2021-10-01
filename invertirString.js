const invertirString = text => {

    let textoArray = []
    let textoInvertido = ""

    for (const letra in text) {
        textoArray.push(text[letra])
    }
    
    while(textoArray.length > 0) {
        textoInvertido += textoArray.pop()
    }

    return textoInvertido
}


let stringInvertido = invertirString("hola")
console.log(stringInvertido)