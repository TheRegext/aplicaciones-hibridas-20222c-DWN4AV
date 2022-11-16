function Counter(container) {
    this.count = 0

    // creando los elementos
    this.buttons = {
        add: document.createElement('button'),
        sub: document.createElement('button')
    }

    this.display = document.createElement('label')

    this.container = container

    // configuro los elementos
    this.buttons.add.innerText = '+'
    this.buttons.sub.innerText = '-'
    this.display.innerText = this.count

    // los agrego al contenedor
    this.container.appendChild(this.buttons.sub)
    this.container.appendChild(this.display)
    this.container.appendChild(this.buttons.add)

    // configuro los eventos
    this.buttons.add.addEventListener('click', () => {
        this.add()
    })

    this.buttons.sub.addEventListener('click', () => {
        this.sub()
    })


    this.add = () => {
        this.count++
        this.display.innerText = this.count
    }

    this.sub = () => {
        this.count--
        this.display.innerText = this.count
    }

    this.getValue = () => {
        return this.count
    }
}



const contador1 = new Counter(document.getElementById('contador1'));
const contador2 = new Counter(document.getElementById('contador2'));



