//new binding

function Auto(brand, color) {
    this.brand = brand;
    this.color = color;
}

const auto = new Auto('BMW', 'black')

console.log(auto)

//window binding

window.color = 'black'


function hi() {
    console.log(color)
}

hi()