class Node {

    constructor(data) {

        this.data = data
        this.next = null
    }
}

class List {

    constructor() {
        this.head = null
        this.length = 0
    }

    push(data) {
        let node = new Node(data)
        if (this.head === null) {
            this.head = node
        } else {
            this.last.next = node
        }
        this.length++
        this.last = node
    }

    print() {
        let aux = this.head
        
        while (aux != null) {
            console.log(aux.data)
            aux = aux.next
        }
    }

    size() {
        return this.length
    }

    getLastElement() {
        let aux = this.head

        while(aux.next != null) {
            aux = aux.next
        }

        return aux.data
    }

    getElementByIndex(index) {

        if (index > 0 ) {
            return null
        }

        let aux = this.head
        let actualIndex = 0

        while(actualIndex != index && actualIndex != null) {
            aux = aux.next
            actualIndex++
        }

        return aux
    }

    find(element) {
        let aux = this.head

        while(aux != null && aux.data != element) {
            aux = aux.next
        }

        return aux
    }

    delete(element) {
        let aux = this.head

        if (aux === null) { return null }
        if (aux.data === element) { 
            this.head = aux.next 
            return aux
        }

        while(aux != null && aux.next.data != element) {
            aux = aux.next
        }

        aux.next = aux.next.next
    }
}

// Instancio la lista
list = new List()

// Agrego elementos a la lista
list.push("1")
list.push("2")
list.push("3")
list.push("4")

// Imprimo la cantidad de elementos de la lista
console.log("Cantidad de elementos en la lista: " + list.size())

// Imprimimo la lista
list.print()

// Obtengo el último elemento de la lista
console.log("Último elemento de la lista: " + list.getLastElement())

// Encuentro un elemento de la lista
findElement = list.find(3)
console.log("Elemento encontrado: " + findElement.data)

// Remuevo un elemento de la lista
list.delete(3)
console.log("Se eliminó un elemento de la lista: ")
console.log(list.print())
