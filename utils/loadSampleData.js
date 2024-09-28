import { Reserva } from "../models/ReservaModel";

export default async function loadSampleData() {
  try {
    const data = await import("../models/sample.json", {
      assert: { type: "json" },
    });
    const previousData = window.localStorage.getItem("reservas");

    if (!previousData) {
      const reservas = data.default.map(
        (reserva) =>
          new Reserva(
            reserva.placa,
            reserva.proprietario,
            reserva.apartamento,
            reserva.bloco,
            reserva.modelo,
            reserva.cor,
            reserva.vaga
          )
      );
      window.localStorage.setItem("reservas", JSON.stringify(reservas));
    }
  } catch (err) {
    console.error("Error loading JSON:", err);
  }
}
