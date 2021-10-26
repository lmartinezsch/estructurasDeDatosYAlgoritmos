const isAnagrama = (string1, string2) => {

    if (string1.length != string2.length) {
        return false
    }
    
    result = true
    let letters = string1.split("")
    let string2Array = string2.split("")
    let lettersDic = []

    letters.forEach((letter, index) => {
        if (!lettersDic.find(x => x.key === letter)) {
            lettersObject = {}
            lettersObject.key = letter
            lettersObject.value = 1
            lettersDic.push(lettersObject)
        }
    })

    string2Array.forEach((letter, index) => {
        const find = lettersDic.find(x => x.key == letter)
        if (find) {
            find.value -= 1
        }
    })

    lettersDic.forEach((letter, value) => {   
        if (letter.value != 0) {
            result = false
            return
        }
    })

    return result
}

let string1 = "frase"
let string2 = "fresa"
if (isAnagrama(string1, string2)) {
    console.log("La palabra " + string2 + " es un anagrama de " + string1)
} else {
    console.log("La palabra " + string2 + " NO es un anagrama de " + string1)
}