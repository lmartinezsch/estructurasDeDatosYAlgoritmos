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
        return this.pila.length
    }

    print() {
        console.log('Elementos en la pila: ')
        console.log(this.pila)
    }
}

pilaObjeto = new Pila()

// Texto a invertir
const mensaje = "apocalypto"
let mensajeInvertido = ""

// Recorro el string y agrego cada letra a la pila
for (const letra in mensaje) {
    pilaObjeto.push(mensaje[letra])
}
console.log(pilaObjeto.pop())

while (pilaObjeto.size() > 0) {
    mensajeInvertido += pilaObjeto.pop()
}

console.log(mensajeInvertido)