//read in https://github.com/typicode/json-server run: json-server  db.json -p  4000
// REMEMBER RUN json-server  db.json -p  4000 in to the root base of the proyect

const url = 'http://localhost:4000/clientes'
// create a new client
export const newClient = async client => {
    try {
        await fetch(url, {
            method: 'POST', //when create a new client always use POST
            body: JSON.stringify(client),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html'
    } catch (error) {
        console.log(error)
    }
}

//get all clients
export const allClients = async () => {
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error)
    }
}


// Eliminate client
export const deleteClient = async id => {
    try {
        const response = await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.log(error)
    }
}

//get Client by Id
export const getClient = async id => {
    try {
        const response = await fetch(`${url}/${id}`)
        const clientId = await response.json()
        return clientId;
    } catch (error) {
        console.log(error)
    }
}

// Update client ID
export const updateInfoClient = async client => {
    try {
        await fetch(`${url}/${client.id}`, {
            method: 'PUT',
            body: JSON.stringify(client),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html'
    } catch (error) {
        console.log(error)
    }
}