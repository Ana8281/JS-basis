//SCOPE: the reach of a variable,  where is visible the variable

const client = 'Juan'

function showClient() {
    const client = 'Peter'
    console.log(client) // this console has priority the scope into function
}

showClient()