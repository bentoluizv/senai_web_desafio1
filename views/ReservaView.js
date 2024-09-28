export class ReservaView {
  constructor(reservaController) {
    this.controller = reservaController;
  }
  listar() {
    const listagem = document.getElementById("listagem");
    const reservas = this.controller.listar();
    for (let index = 0; index < reservas.length; index++) {
      const reserva = reservas[index];
      const li = document.createElement("li");
      li.classList.add("p-4", "border", "border-blue-400");
      li.textContent = `${reserva.placa} - ${reserva.proprietario} - ${reserva.modelo} (${reserva.cor})`;
      listagem.appendChild(li);
    }
  }

  registrar() {
    const form = document.getElementById("register-form");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const data = {
        proprietario: formData.get("proprietario-nome"),
        apartamento: formData.get("proprietario-ap"),
        bloco: formData.get("proprietario-bl"),
        placa: formData.get("veiculo-placa"),
        modelo: formData.get("veiculo-modelo"),
        cor: formData.get("veiculo-cor"),
      };

      this.controller.fazerReserva(data);
      window.location.href = `/index.html`;
    });
  }
}
