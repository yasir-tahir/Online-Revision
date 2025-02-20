const marvel_heros = ['thor', 'ironman', 'spiderman'];
const dc_heros = ['superman', 'batman', 'flash'];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// const allHeros = marvel_heros.concat(dc_heros); //ye concat array hai ye arrays ko merge karta hai

// console.log(allHeros);

// const all_new_Heros = [...marvel_heros, ...dc_heros]; //ye sprade array hai ye arrays ko merge karta hai

// console.log(all_new_Heros);


// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

console.log(Array.isArray('Yasir'));
console.log(Array.from('Yasir'));
console.log(Array.from({name: 'Yasir'})); //interesting


let score1 = 100;
let score2 = 300;
let score3 = 200;

console.log(Array.of(score1, score2, score3));


