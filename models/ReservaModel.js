export class Reserva {
  constructor(placa, proprietario, apartamento, bloco, modelo, cor) {
    this.uuid = crypto.randomUUID();
    this.placa = placa;
    this.proprietario = proprietario;
    this.apartamento = apartamento;
    this.bloco = bloco;
    this.modelo = modelo;
    this.cor = cor;
  }
}

export class ReservaModel {
  reservas = [];

  constructor() {
    this.#syncWithStorage();
  }

  register(reserva) {
    this.reservas.push(reserva);
    this.#sendToStorage();
  }

  list() {
    this.#syncWithStorage();
    return this.reservas.reverse();
  }

  delete(uuid) {
    console.log(this.reservas);
    this.reservas = this.reservas.filter((reserva) => reserva.uuid !== uuid);
    this.#sendToStorage();
  }

  #sendToStorage() {
    window.localStorage.setItem("reservas", JSON.stringify(this.reservas));
  }

  #syncWithStorage() {
    const localData = window.localStorage.getItem("reservas");
    if (!localData) {
      return;
    }

    this.reservas = JSON.parse(localData);

    if (!Array.isArray(this.reservas)) {
      throw new Error("Revervas is not an Array");
    }

    this.reservas = this.reservas;
  }
}
