const user = true;
const availablePay = false;

if(user && availablePay) {
    console.log('you can buy');
} else if(!user && !availablePay) {
    console.log('you can not buy');
} else if(!user) {
    console.log('you are not user');
} else if(!availablePay) {
    console.log('you are not available to pay');
}
