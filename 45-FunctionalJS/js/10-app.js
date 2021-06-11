// composition = it's an alternative to classes
const getName = info => ({
    showName() {
        console.log(`Name: ${info.name}`)
    }
})

const setEmail = info => ({
    addEmail(email) {
        console.log(`save Email in ${info.name}`) 
        info.email = email
    }
})

const getEmail = info => ({
    showEmail() {
        console.log(`Email: ${info.email}`) 
    }
})

const getCompany = info => ({
    showCompany() {
        console.log(`Company: ${info.company}`) 
    }
})

const getRol = info => ({
    showRol() {
        console.log(`Rol: ${info.rol}`) 
    }
})



function Client(name, email, company) {
    let info = {
        name,
        email,
        company
    }

    return Object.assign(
        info, 
        getName(info),
        setEmail(info),
        getEmail(info),
        getCompany(info)
    )

}

function Company(name, email, rol) {
    let info = {
        name,
        email,
        rol
    }

    return Object.assign(
        info, 
        getName(info),
        setEmail(info),
        getEmail(info),
        getRol(info)
    )
}


const user = new Client('ana', null, 'Genius')

user.showName()
user.addEmail('a@a.com')
user.showEmail()
user.showCompany()

console.log('=================================')
const employer = new Company('felipe', null, 'developer')
employer.showName()
employer.addEmail('f@f.com')
employer.showEmail()
employer.showRol()


