const cleanWord = word => {
    
    result = word.replace(" ", "").toLowerCase()

    return result
}

const isAnagrama = (word1, word2) => {

    result = false
    word1Ordered = cleanWord(word1).split("").sort().join()
    word2Ordered = cleanWord(word2).split("").sort().join()

    if (word1Ordered === word2Ordered) {
        result = true
    }

    return result
}

console.log(isAnagrama("Hola", "aloh"))