//good practices

const authenticated = true;

if (authenticated) {// you not need to add authenticated = true;
    console.log('yes you are authenticated');
}

const scoreT = 450;

// if (400 < scoreT) {
//     console.log('excelent');
// } else if (300 < scoreT) {
//     console.log('well done')
// }

//for replace most of the else if you can

function reviewScore() {
    if (400 < scoreT) {
        console.log('excelent');
        return; //onl works into a function and means only executed this and that's it
    }

    if (300 < scoreT) {
        console.log('well done');
        return;
    }
}

reviewScore();