//what is the difference between declaracion and expression functions

//in declarations i can call first the function
smart();

function smart1() {
    console.log(2+2);
}

//in expressions first create a variable undefined anyway test1 is never executed = const test1; test1()
//test1(); //tihs never is executed
const test1 = function() {
    console.log('i am function expression');
}



