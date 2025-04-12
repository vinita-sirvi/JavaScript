const marvel_heros = ['thor', 'ironman', 'spiderman'];
const dc_heros = ['superman', 'batsman', 'flash'];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros) // ['thor', 'ironman', 'hulk', 'spiderman', 'black widow', ['superman', 'batsman', 'wonderwoman', 'green lantern', 'flash']]
// console.log(marvel_heros[3]) // spiderman
// console.log(marvel_heros[3][2]) // wonderwoman

// const AllHeros = marvel_heros.concat(dc_heros)
// console.log(AllHeros); // ['thor', 'ironman', 'hulk', 'spiderman', 'black widow', ['superman', 'batsman', 'wonderwoman', 'green lantern', 'flash']]

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros); // ['thor', 'ironman', 'hulk', 'spiderman', 'black widow', 'superman', 'batsman', 'wonderwoman', 'green lantern', 'flash']

const another_arr = [1, 2, 3, [4,5,6], 7, [4, 5, [6,7]]]
const real_another_arr = another_arr.flat(Infinity)
// console.log(real_another_arr) // [1, 2, 3, 4, 5, 6, 7, 4, 5, 6, 7]


console.log(Array.isArray("vinita")) // true
console.log(Array.from("vinita")) 
console.log(Array.from({name: "Vinita"})) // Interesting



