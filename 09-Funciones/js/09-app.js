//methods

const reproductor = {
    reproducing: function(id) {
        console.log(`reproducing song ${id}`);
    },
    pause: function() {
        console.log(`pausing...`);
    },
    clear: function(id) {
        console.log(`removing song ${id}`);
    },
    createPlaylist: function(name) {
        console.log(`creating playlist ${name}`);
    },
    reproducingPlaylist: function(name) {
        console.log(`reproducing playlist ${name}`);
    }
}

console.log(reproductor.reproducing(30))
console.log(reproductor.reproducing(20))
console.log(reproductor.pause())

console.log(reproductor.createPlaylist('rock'))
console.log(reproductor.createPlaylist('pop'))
console.log(reproductor.createPlaylist('salse'))


// reproductor.clear = function() {
//     console.log(`removing song...`);
// }

console.log(reproductor.clear(30))

console.log(reproductor.reproducingPlaylist('salse'))
