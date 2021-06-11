//object literal

const accesories = {
    socks: 'socks',
    size: 'L',
    color: 'caps',
    available: true
}


//object constructor
function Accesories(socks, size, color) {
 this.socks = socks;
 this.size = size;
 this.color = color;
}

const accesories2 = new Accesories('disney', 'M', 'red');
console.log(accesories2);

const accesories3 = new Accesories('christmas', 'L', 'green');
console.log(accesories3)