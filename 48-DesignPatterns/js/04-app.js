//Factory : create objects base in some conditios

class inputHTML {
    constructor(type, name) {
        this.type = type;
        this.name = name;
    }

    createInput() {
        return `<input type="${this.type}" name="${this.name}" id="${this.name}">`
    }
}

//const result = new inputHTML('text', 'test')

class HTMLFactory {
    createElement(type, name) {
        switch (type) {
            case 'text':
                return new inputHTML(type, name)
                break;
            case 'submit':
                return new inputHTML(type, name)
            break;
        
            default:
                return;
        }
    }
}

const res1 = new HTMLFactory()
const inputText = res1.createElement('text', 'test text')
console.log(inputText)

const inputSumbit = res1.createElement('submit', 'test submit')
console.log(inputSumbit)