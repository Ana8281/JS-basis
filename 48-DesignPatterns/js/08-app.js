// Mediator: can communicate with several object at the same time

function Seller() {
    this.name = name;
    this.room = null;
}

Seller.prototype = {
    oferta: (article, price) => {
        console.log(`We have the following article ${article} with an initial price of ${price}`)
    },
    selled: buyer => {
        console.log(`sold to ${buyer}`)

    }


}

function Buyer() {
    this.name = name;
    this.room = null;

}

Buyer.prototype = {
    oferta: (name, quantity) => {
        console.log(`The Buyer ${name} offered a quantity of ${quantity}`)
    },
}

function Sale() { //this is the meadiator because comunicate sales and buyers
     let buyers = {}

     return {
         register: user => {
             buyers[user.name] = user;
             user.room = this;
         }
     }
}

const Juan = new Buyer('Juan')
const Pablo = new Buyer('Pablo')
const seller = new Seller('Seller autos')
const sale = new Sale()

const offer1 = seller.oferta("mustang", 5000)

const comprador1 = Juan.oferta("Juan", 5500)
const comprador2 = Pablo.oferta("Pablo", 5600)

const sold1 = seller.selled("Pablo")

// Register all users in th room of sale
sale.register(Pablo)
sale.register(Juan)
sale.register(seller)


