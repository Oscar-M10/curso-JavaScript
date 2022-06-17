function saludar(nombre){
    console.log(arguments);
    console.log('Hola ' + nombre + ' ¿Cómo Estas?');
    return [1,2];

    //esto nunca se va ejecutar
    //console.log('Soy un código que esta después del return');
}

const saludar2 = function(nombre){
    console.log('Aque horas pasas por el pan? ' + nombre);
}


saludar('oscar', 40, true, 'Costa Rica');
//saludar2('oscar');

const saludarFlecha = () =>{
    console.log('Hola Flecha');
}

const saludarFlecha2 = ( nombre ) =>{
    console.log('Hola ' + nombre);
    //console.log({saludarFlecha2});
}

saludarFlecha();
saludarFlecha2(' Mundo ');

const retornoDeSaludar = saludar('oscar', 40, true, 'Costa Rica');
console.log(retornoDeSaludar[0],retornoDeSaludar[1] );

function sumar(a,b){
    return a + b;
}

//const sumar2 =(a,b) =>{
//    return a + b; 
//}

const sumar3 = (a,b) => a + b;

console.log( sumar3(5,20) );

//En una funcion de flecha, que no tenga llaves {}
//getAleatorio2
const getAleatorio2 =() => Math.random();
console.log(getAleatorio2());


//function getAleatorio(){
//    return Math.random(); 
//}
//console.log( getAleatorio() );
