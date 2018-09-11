// Tipos de datos primitivos

// String

let mensaje: string;

mensaje = 'Hola Mundo';

// let variableRepetida;
// let variableRepetida;

// Number

let resultado: number;
resultado = 9.5;

// Boolean

let mayorEdad: boolean;
mayorEdad = true;

// Arrays

let frutas: string[];
let coches: Array<string>;

frutas = ['pera','manzana'];

// Any (para eliminar inferencia de tipos)

// let edad = 'cuarenta';
// edad = 50;

let edad: any = 22;
edad = 'treinta';

// Enum

enum TallaPantalon { small, medium, large };

let pantalon: TallaPantalon = TallaPantalon.small;

// Enum con valores

enum TallaZapato { uk40= 40, uk5= 42}

let zapatilla: TallaZapato = TallaZapato.uk40;

// Void

function saludo (): void {
    // return 'Hola Mundo';
    console.log('Hola Mundo!');
}

// Undefined

let indefinida: undefined = null;

// Tipado de objetos

let jugador1: object;

jugador1 = {
    nombre: 'Lionel',
    apellidos: 'Messi'
}

let jugador2: {nombre: string, apellidos:string};

jugador2 = {
    nombre: 'Sergio',
    apellidos: 'Ramos'
    // edad: 30 error
}

// Tipos de unión

type id = string | number;

let referencia: id;

referencia = 'AB10318';
referencia = 1247810;
// referencia = true; error

// Tipos de unión 

type raza = 'Pastor Alemán' | 'Mastín' | 'Doberman';

let toby:raza = 'Mastín';
// toby = 'Bichón'; error

// Tipado en funciones

function suma(a: number, b: number): number {
    // return 'Hola Mundo!'; error
    return a + b;
}

 // suma('a',2); error

 // Parámetros opcionales en funciones

 function multiplicacion (a:number, b:number, mensaje?:string) {
    let resultado = a * b;
    return mensaje ? mensaje + resultado : `El resultado es ${resultado}`;
 }

 // Tipos genéricos (definición del tipo en tiempo de ejecución)

 function devResultado<T> (a:T): T {
     return a;
 }

 let b = devResultado<string>('Aprobado');
 let c = devResultado<number>(12);
 
