const cash = 300;

const credit = 400;

const available = cash + credit;

const totalPagar = 600;

//only execute the first true condition in this case target to pay

if (cash > totalPagar || credit > totalPagar || available > totalPagar) {
    console.log('you can pay')
} else {
    console.log('you dont have money')
}