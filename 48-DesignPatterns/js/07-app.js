// Namespace


const restaurantApp = {}; //over this namespace we are going to add all the functions new properties etc for not have conflicts with the global scope

restaurantApp.platillos = [
    {
        platillo: "Pizza",
        price: 25
    },
    {
        platillo: "tacos",
        price: 30
    },
    {
        platillo: "burguer",
        price: 15
    },
]

restaurantApp.functions = {
    showMenu: platillos => {
        console.log('welcome our menu')

        platillos.forEach((platillo, index) => {
            console.log(`${index}: ${platillo.platillo} $${platillo.price} `)
        });
    },

    order: id => {
        console.log(`your platillo ${platillos[id].platillo} is being cooking`)
    },
    addPlatillo: (platillo, price) => {
        const newPlatillo = {
            platillo: platillo,
            price: price
        }

        let result = [...platillos, newPlatillo];

        return result;
    }
}

const {platillos} = restaurantApp

console.log(restaurantApp.functions.showMenu(platillos))
console.log(restaurantApp.functions.order(1))
console.log(restaurantApp.functions.addPlatillo("Hot Dog", 12))


