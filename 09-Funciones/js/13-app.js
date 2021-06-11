//methods arrays

const reproductor1 = {
    song: '',
    reproducing: id => `reproducing song ${id}`,
    pause: () => `pausing...`,
    clear: id => `removing song ${id}`,
    createPlaylist: name => `creating playlist ${name}`,
    reproducingPlaylist: name => `reproducing playlist ${name}`,

    set newSong(song) {
        this.song = song;
        console.log(`adding new song ${song}`);
    },

    get getSong() {
        console.log(`getting ${this.song}`)
    }
}

console.log(reproductor1.reproducing(30))
console.log(reproductor1.reproducing(20))
console.log(reproductor1.pause())

console.log(reproductor1.createPlaylist('rock'))
console.log(reproductor1.createPlaylist('pop'))
console.log(reproductor1.createPlaylist('salse'))
reproductor1.newSong = 'Britney Spears'
reproductor1.getSong

// reproductor.clear = function() {
//     console.log(`removing song...`);
// }

console.log(reproductor1.clear(30))

console.log(reproductor1.reproducingPlaylist('salse'))
