import { Reserva } from "../models/ReservaModel";

export class ReservaController {
  constructor(reservaModel) {
    this.model = reservaModel;
  }
  register(data) {
    const properties = [
      "placa",
      "proprietario",
      "apartamento",
      "bloco",
      "modelo",
      "cor",
      "vaga",
    ];
    const hasAllProperties = properties.every((prop) => prop in data);
    if (!hasAllProperties) throw new Error("Invalid Input Data!");

    const reserva = new Reserva(
      data.placa,
      data.proprietario,
      data.apartamento,
      data.bloco,
      data.modelo,
      data.cor,
      data.vaga
    );

    this.model.register(reserva);
  }

  list() {
    const data = this.model.list();
    return data;
  }

  delete(uuid) {
    this.model.delete(uuid);
  }
}
