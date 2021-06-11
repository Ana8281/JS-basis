//parameters and arguments


//with arguments by default
function smart3() {
    let result = 0;

    for(let i=0; i< arguments.length; i++) {
        result += arguments[i];
    }

    console.log(result);
    return result;
}

smart3(1, 2, 3, 4);

/////with rest parameters

function smart2(...numbers) {
    let result = 0;

    for(let i=0; i< numbers.length; i++) {
        result += numbers[i];
    }

    console.log(result);
    return result;
}

smart2(1, 2, 3, 4);



// dymamic data
function greetings(name, surname) {
    console.log(`guten morgen ${name} ${surname} willkommen`);
}

greetings('Ana', 'Arbelaez');