class Pila {

    constructor() {
        this.pila = []
    }

    push(dato) {
        this.pila.push(dato)
    }

    pop() {
        if (this.pila.length <= 0) {
            console.log("No hay elementos en la pila")
        } else {
            this.pila.pop()
        }
    }

    peek() {
        if (this.pila.length <= 0) {
            console.log('No hay elementos en la pila')
        } else {
            const tope = this.pila[this.pila.length - 1]
            console.log('El dato en el tope es: ' + tope)
            return tope
        }
    }

    size() {
        console.log('El tamaño de la pila es: ' + this.pila.length)
        return this.pila.length
    }

    print() {
        console.log('Elementos en la pila: ')
        console.log(this.pila)
    }
}

pilaObjeto = new Pila()
pilaObjeto.size()

// Agregamos datos a la pila
pilaObjeto.push(10)
pilaObjeto.push(20)
pilaObjeto.push(30)
pilaObjeto.push(40)

// Desplegamos la pila
pilaObjeto.print()

// Desplegamos el tope de la pila
pilaObjeto.peek()

// Sacamos dos elementos de la pila
pilaObjeto.pop()
pilaObjeto.pop()

// Desplegamos la pila
pilaObjeto.print()