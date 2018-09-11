class Jugador {
    public nombre: string;
    public apellidos: string;
    dorsal: number; // public por defecto
    public goles: number = 0;

    constructor(nombre:string, apellidos:string, dorsal: number){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dorsal = dorsal;
    }

    marcarGol(): void {
        this.goles++;
    }
}

let jugador1 = new Jugador('Sergio','Ramos',3);

jugador1.marcarGol();

// Constructor breve

class Player {

    constructor(public nombre: string,
                public apellidos: string,
                public dorsal: number,
                public goles?: number) {
                    this.goles = goles ? goles : 0;
                }
    marcarGol(): void {
        this.goles++;
    }
    
}

// Clases e interfaces

interface DatosMaestros {
    razonSocial: string;
    cif: string
}

class Cliente implements DatosMaestros {
    razonSocial: string;
    cif: string;
    formaPago: string;

        constructor(razonSocial: string, cif: string, formaPago: string) {
            this.razonSocial = razonSocial;
            this.cif = cif;
            this.formaPago = formaPago;
        } 
}