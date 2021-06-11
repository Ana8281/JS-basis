// CLOSURES: Its the way to access  a value from outside function
//it allows acces to global variable 
const getMessage = () => {

    const globalV = 'Im a global variable'

    function accesGlobalV() {
        console.log(globalV)
    }

    return accesGlobalV;
}


const resultG = getMessage();

resultG()