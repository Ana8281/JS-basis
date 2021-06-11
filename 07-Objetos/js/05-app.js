//nested objects

const family = {
    parents: {
        grandMother: 'Myriam',
        grandFather: 'Francisco',
        children: {
            daugther: 'cristina',
            son: 'Pacho'
        }
    }
}

console.log(family.parents.children.daugther)