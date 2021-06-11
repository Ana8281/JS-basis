const money1 = 300;

const total1 = 500;

const card = true;
const cheque = true;

//only execute the first true condition in this case target to pay

if (money1 >= total1) {
    console.log('yes you have money')
} else if (card) {
    console.log('yes you have target to pay')
} else if (cheque) {
    console.log('yes you have cheque')
}else {
    console.log('schade! you dont have money')
}


