// Interfaces para definición de estructuras
// de objetos

interface Jugador {
    nombre: string;
    apellidos: string;
}

let jugador1: Jugador = {
    nombre: 'Sergio',
    apellidos: 'Ramos'
    // , edad: 30 error
}

// Propiedades opcionales

interface Ordenador {
    tipologia: string;
    marca: string;
    precioEuros?: number;
}

let equipo1: Ordenador = {
    tipologia: 'PC',
    marca: 'HP',
    precioEuros: 1200 // propiedad opcional
}