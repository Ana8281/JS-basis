// Functions that return another function

const getClient = () => () => console.log('Hi Ana')

const fn = getClient()

fn()