let juegos = ['Zelda','Mario','Metroid','Chrono'];
console.log('Largo', juegos.length);

let primero = juegos[2-2];
let ultimo = juegos[juegos.length -1 ];

console.log({primero, ultimo});

//forEach recorre los elementos del Array
juegos.forEach((elemento, indice, array)=>{
    console.log(elemento, indice, array);
});

//push añade un elemento al final del Array
let nuevaLongitud = juegos.push('F-Zero');
console.log({nuevaLongitud, juegos});

//unshift inserta un elemento nuevo al comienzo del Array
nuevaLongitud = juegos.unshift('Fire Emble');
console.log({nuevaLongitud,juegos});


//POP borra el ultimo elemento dentro del Array
let juegoBorrado = juegos.pop(juegos);
console.log({juegoBorrado, juegos});

let pos = 1; 
let juegosBorrados = juegos.splice(pos,2);
console.log({juegosBorrados,juegos});

let metroidIndex = juegos.indexOf('Metroid');
console.log({metroidIndex});
