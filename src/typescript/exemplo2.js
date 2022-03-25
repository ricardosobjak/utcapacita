"use strict";
class Carro {
    constructor() {
        this.marca = "";
        this.portas = 0;
        this.passageiros = [];
        this.modelo = "";
    }
}
let celta = new Carro();
celta.marca = "Chevrolet";
celta.modelo = "Celta";
celta.portas = 1;
celta.passageiros = ["Fulano", "Maria", "Ana", "Zé"];
