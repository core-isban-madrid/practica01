// Tipos de datos primitivos
// String
var mensaje;
mensaje = 'Hola Mundo';
// let variableRepetida;
// let variableRepetida;
// Number
var resultado;
resultado = 9.5;
// Boolean
var mayorEdad;
mayorEdad = true;
// Arrays
var frutas;
var coches;
frutas = ['pera', 'manzana'];
// Any (para eliminar inferencia de tipos)
// let edad = 'cuarenta';
// edad = 50;
var edad = 22;
edad = 'treinta';
// Enum
var TallaPantalon;
(function (TallaPantalon) {
    TallaPantalon[TallaPantalon["small"] = 0] = "small";
    TallaPantalon[TallaPantalon["medium"] = 1] = "medium";
    TallaPantalon[TallaPantalon["large"] = 2] = "large";
})(TallaPantalon || (TallaPantalon = {}));
;
var pantalon = TallaPantalon.small;
// Enum con valores
var TallaZapato;
(function (TallaZapato) {
    TallaZapato[TallaZapato["uk40"] = 40] = "uk40";
    TallaZapato[TallaZapato["uk5"] = 42] = "uk5";
})(TallaZapato || (TallaZapato = {}));
var zapatilla = TallaZapato.uk40;
// Void
function saludo() {
    // return 'Hola Mundo';
    console.log('Hola Mundo!');
}
// Undefined
var indefinida = null;
// Tipado de objetos
var jugador1;
jugador1 = {
    nombre: 'Lionel',
    apellidos: 'Messi'
};
var jugador2;
jugador2 = {
    nombre: 'Sergio',
    apellidos: 'Ramos'
    // edad: 30 error
};
var referencia;
referencia = 'AB10318';
referencia = 1247810;
var toby = 'Mastín';
// toby = 'Bichón'; error
// Tipado en funciones
function suma(a, b) {
    // return 'Hola Mundo!'; error
    return a + b;
}
// suma('a',2); error
// Parámetros opcionales en funciones
function multiplicacion(a, b, mensaje) {
    var resultado = a * b;
    return mensaje ? mensaje + resultado : "El resultado es " + resultado;
}
// Tipos genéricos (definición del tipo en tiempo de ejecución)
function devResultado(a) {
    return a;
}
var b = devResultado('Aprobado');
var c = devResultado(12);
