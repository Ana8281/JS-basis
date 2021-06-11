//passing values to functions

function sum(a, b) {
    return a + b;
}

const result1 = sum(5,3);

console.log(result1)

let total = 0;

function addCar(precio) {
    return total += precio;
}

function calculateTaxes(total) {
  return total *= 1.15;

}

addCar(100);
addCar(100);
addCar(100);

const totalToPay = calculateTaxes(total)

console.log(`The total to pay is: ${totalToPay}`);



