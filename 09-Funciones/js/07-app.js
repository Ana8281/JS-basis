//how functions communicate

initApp();

function initApp() {
    console.log('initializing app...');

    secondFuncion();
}

function secondFuncion() {
    console.log('from second function');

    authenticatedUser();
}

function authenticatedUser(user) {
    console.log('authenticating, wait');
    console.log(`user: ${user} authenticated succesfully`);
}
