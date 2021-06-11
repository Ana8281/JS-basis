
// manage multiples awaits
function downloadnewClients() {
    return new Promise(resolve => {
        console.log('downloaded Clients...')
        setTimeout(() => {
            resolve('clientes were downloaded')
        }, 5000)
    })
}

function downloadnewRequests() {
    return new Promise(resolve => {
        console.log('downloaded Requests...')
        setTimeout(() => {
            resolve('Requests were downloaded')
        }, 3000)
    })
}

//improving performance(how to improve the download of data without waiting more)


const app = async () => {
    try {

        // First way: first fn block the execution of second function and sometimes it increse performance if it is not necessary
        // const result1 = await downloadnewClients()
        // console.log(result1)
        // const result2 = await downloadnewRequests()
        //console.log(result2)

        //if functions can work without depends one of the other and helps a lot the performance becasue it execute at the same time
        const response = await Promise.all([downloadnewClients(), downloadnewRequests()])
        console.log(response[0])
        console.log(response[1])

    } catch (error) {
        console.log(error)
    }
}

app()