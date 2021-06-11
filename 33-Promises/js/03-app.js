// Promises

const applyDiscount = new Promise(
    (resolve, reject) => {
        const user = true;

        if (user) {
            resolve('Discount applied')
        } else {
            reject('Discount cant be applied')
        }
    }
)

console.log(applyDiscount)
//there are 3 possible values
//fulfilled - promise is done
//rejected - Promise not done
//pendind - Promise is not yet done and neither rejected

applyDiscount
    .then(result => discountMsg(result))
    .catch(error => console.log(error))


function discountMsg(msg) {
    console.log(msg)
}