import { Reserva } from "../models/ReservaModel";

export class ReservaController {
  constructor(reservaModel) {
    this.model = reservaModel;
  }
  fazerReserva(data) {
    const properties = [
      "placa",
      "proprietario",
      "apartamento",
      "bloco",
      "modelo",
      "cor",
    ];
    const hasAllProperties = properties.every((prop) => prop in data);
    if (!hasAllProperties) throw new Error("Invalid Input Data!");

    const reserva = new Reserva(
      data.placa,
      data.proprietario,
      data.apartamento,
      data.bloco,
      data.modelo,
      data.cor
    );

    this.model.register(reserva);
  }

  listar() {
    const data = this.model.list();
    return data;
  }
}
