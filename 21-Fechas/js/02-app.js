//using momentjs

moment.locale('es')

console.log(moment().format('MMMM Do YYYY h:mm:ss'))

console.log(moment().format('LLLL', new Date()))

//three days after now date, it helps for example for coupon
console.log(moment().add(3, 'days').calendar())
