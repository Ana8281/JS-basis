
//SPREAD OPERATOR

const monthsOfYear = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const staff = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let addMonths = [...monthsOfYear, 'August']
console.log(addMonths)


let newStaff = [{nombre: 'mouse', precio: 50}, ...staff]
console.log(newStaff)


///////////////////////////////HACERRANK TESTS////////////////////
function sockMerchant(n, ar) {
    var total = 0;
    ar = ar.sort();

    for (var i = 0; i < n;) {
 
        // A valid pair is found
        if (ar[i] == ar[i + 1]) {
            total++;
 
            // Skip the elements of
            // the current pair
            i = i + 2;
        }
 
        // Current elements doesn't make
        // a valid pair with any other element
        else {
            i++;
        }
    }
    
    return total;
}

console.log('sales by match' , sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));


function jumpingOnClouds(c) {
    var n = 0;
    for (var i = 0; i < c.length - 1;) {
      i += (c[i+2] ? 1 : 2);
      n++;
    }
    return n;
  
  }

console.log('jumpung clouds', jumpingOnClouds([0, 0, 0, 0, 1, 0]))
