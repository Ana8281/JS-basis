const score1 = 1001;

if (score1 !=  100) { //diferente
    console.log('yes, it is different')
}

//== operator not strict (check value)
//=== operator strict(check data type and value)

const score2 = 1001;

if (score2 ===  "1001") { //diferente
    console.log('yes, it is equal')
} else {
    console.log('not. it is not equal')
}

const score3 = 1001;

if (score3 !==  "100") { //diferente
    console.log('yes, it is is different')
} else {
    console.log('not. it is not different')
}