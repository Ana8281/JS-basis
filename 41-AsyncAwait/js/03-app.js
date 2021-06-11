//async await with fn expression
// function downloadClients() {
//     return new Promise((resolve, reject) => {
//         const error = false;

//         setTimeout(() => {
//             if (!error) {
//             resolve('Client List was downloaded sucesfully')
//             } else {
//                 reject('Error in the conection')
//             }
//         }, 3000)

//     })
// }

// //Async await

// const executeFn = async () => {
//     try {
//         //instead of has a then(response => response.json i assing response to a variable)
//         const response = await downloadClients() // await is added where the promise is going to execute. await stop the execution until promise is executed
//         console.log(2+20)
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }

// executeFn()