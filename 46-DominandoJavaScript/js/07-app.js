//Event loop and loop events: check how javascript manage the events in stack first and the other are adeed in the queue
// check in this exercise the execution

//QUESTION FOR A JOB!!!!!!!! how is the execution of the follow code

// console.log('first')

// setTimeout(() => {
//     console.log('second')
// })

// const userE = 'third'

// console.log(userE)

// console.log('fourth')

// new Promise((resolve) => {
//     resolve('...fifth')
// }).then(console.log)

// setTimeout(() => console.log('sixth'))

// function hi() {
//     console.log('seventh')
// }

// hi()

function foo() {
    console.log('foo')
    throw new Error('Opss!')
}

function bar() {
    console.log('bar')
    foo();
}

function baz() {
    console.log('baz')
    bar();
}

baz();