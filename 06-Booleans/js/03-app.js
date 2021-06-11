//good practices

const authenticated = true;

//if (authenticated === true) {...} //bad practice

if (authenticated) {
    console.log('you can see netflix movies');
} else {
    console.log('you cannot see netflix movies');
}

//or

!authenticated ? console.log('you can buy') : console.log('you can not buy');