let DB;

document.addEventListener('DOMContentLoaded', () => {
    cmrDB();

    setTimeout(() => {
        createClient();
    }, 5000);
})

function cmrDB() {
    //create data base version 1.0
    let cmrDB = window.indexedDB.open('crm', 1);

    //if there is an error
    cmrDB.onerror = function() {
        console.log('there was an error creating database')
    }

    //if data base was successful created
    cmrDB.onsuccess = function() {
        console.log('database created')

        DB = cmrDB.result;
    }

    //configure database
    cmrDB.onupgradeneeded = function(e) {
        const db = e.target.result;

        const objectStore = db.createObjectStore(
            'crm', {
            keyPath: 'crm',
            autoincrement: true
        });

        //define columns 
        objectStore.createIndex('name', 'name', { unique: false});
        objectStore.createIndex('email', 'email', { unique: true});
        objectStore.createIndex('tel', 'tel', { unique: false});

        console.log('columns created')

    }
}

function createClient() {
    let transaction = DB.transaction(["crm"], "readwrite");

    transaction.oncomplete = function() {
        console.log('transaction completed')
    }

    transaction.onerror = function() {
        console.log('there was an error in the transaction')
    }

    const objectStore = transaction.objectStore('crm');

    console.log(objectStore)

    const newClient = {
        crm: 'test',
        email: 'a@a.com',
        name: 'Ana',
        tel: 2343234
    };

    const request = objectStore.add(newClient);
    console.log(request)
}