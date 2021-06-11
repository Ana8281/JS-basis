// self: it refers to the global window it means

window === self;


self.onload = () => {
    console.log('window ready')
}


const product = {
    name: 'Handy',
    price: '100',
    info() {
        console.log(`This product ${this.name} has a price of ${this.price}`)
    }
}

product.info()