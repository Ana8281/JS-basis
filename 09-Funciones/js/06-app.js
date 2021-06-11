//parameters by default


// function greetings(name, surname) {
//     console.log(`guten morgen ${name} ${surname} willkommen`);
// }

//greetings('Ana'); //guten morgen Ana undefined willkommen

function greetings1(name = 'unknown', surname = '') {
    console.log(`guten morgen ${name} ${surname} willkommen`);
}

greetings1();

greetings1('Ana');
