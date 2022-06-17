
//Funcion de flecha 
const crearPersona = ( nombre, apellido ) => ({nombre,apellido})

const persona = crearPersona('Óscar ','Medellín')
console.log(persona);

const imprimeArgumentos2 = (...args) =>{
    console.log( args );
}

imprimeArgumentos2(10, true, false, 'Oscar', 'Hola');