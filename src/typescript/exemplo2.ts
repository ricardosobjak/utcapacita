class Carro {
  marca: string = "";
  modelo: string;
  portas: number = 0;
  passageiros: Array<any> = [];

  constructor() {
    this.modelo = "";
  }
}

let celta = new Carro();
celta.marca = "Chevrolet";
celta.modelo = "Celta";
celta.portas = 1;
celta.passageiros = ["Fulano", "Maria", "Ana", "Zé"];