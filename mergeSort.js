const merge = (arr1, arr2) => {
    let combinedArray = []
    
    while(arr1.length && arr2.length) {
        let firstElement

        if (arr1[0] < arr2[0]) {
            firstElement = arr1.shift()
        } else {
            firstElement = arr2.shift()
        }

        combinedArray.push(firstElement)
    }

    combinedArray = combinedArray.concat(arr1).concat(arr2)

    return combinedArray
}

const mergeSort = array => {
    let mediumArray = array.length / 2
    let leftArray = array.splice(0, mediumArray)
    let rightArray = array

    return merge(leftArray, rightArray)
}

let arrayDesordenado = [5,8,2,6]
console.log("Array desordenado: " + arrayDesordenado)

let arrayOrdenado = mergeSort(arrayDesordenado)
console.log("Array ordenado: " + arrayOrdenado)