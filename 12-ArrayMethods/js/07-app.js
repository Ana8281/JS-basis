//CONCAT METHOD
const meses1 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['september', 'Oktober'];
const meses3 = ['November', 'December'];

let allMonths = meses1.concat(meses2, meses3)
console.log(allMonths)


//SPREAD OPERATOR

allMonthsApread = [...meses1, ...meses2, ...meses3]
console.log(allMonths)