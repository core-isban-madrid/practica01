var Jugador = /** @class */ (function () {
    function Jugador(nombre, apellidos, dorsal) {
        this.goles = 0;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dorsal = dorsal;
    }
    Jugador.prototype.marcarGol = function () {
        this.goles++;
    };
    return Jugador;
}());
var jugador1 = new Jugador('Sergio', 'Ramos', 3);
jugador1.marcarGol();
// Constructor breve
var Player = /** @class */ (function () {
    function Player(nombre, apellidos, dorsal, goles) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dorsal = dorsal;
        this.goles = goles;
        this.goles = goles ? goles : 0;
    }
    Player.prototype.marcarGol = function () {
        this.goles++;
    };
    return Player;
}());
var Cliente = /** @class */ (function () {
    function Cliente(razonSocial, cif, formaPago) {
        this.razonSocial = razonSocial;
        this.cif = cif;
        this.formaPago = formaPago;
    }
    return Cliente;
}());
