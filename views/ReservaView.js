export class ReservaView {
  constructor(reservaController) {
    this.controller = reservaController;
  }

  list() {
    const listagem = document.getElementById("listagem");
    const reservas = this.controller.list();

    for (let index = 0; index < reservas.length; index++) {
      const reserva = reservas[index];

      const li = document.createElement("li");
      li.id = reserva.uuid;
      li.classList.add(
        "card",
        "bg-gray-100",
        "text-gray-800",
        "p-4",
        "rounded-lg",
        "shadow-md",
        "hover:bg-blue-500",
        "hover:text-white",
        "transition-all",
        "duration-300"
      );
      const div = document.createElement("div");
      div.classList.add("flex", "justify-between");

      const h3 = document.createElement("h3");
      h3.classList.add("font-bold", "text-lg");

      const close = document.createElement("button");
      close.classList.add(
        "card-close-btn",
        "font-bold",
        "text-xl",
        "text-center",
        "cursor-pointer"
      );
      const p_0 = document.createElement("p");
      const p_1 = document.createElement("p");
      const p_2 = document.createElement("p");
      const p_3 = document.createElement("p");

      h3.textContent = `Bloco: ${reserva.bloco} | Ap: ${reserva.apartamento}`;

      close.textContent = "X";
      p_0.textContent = `Vaga: ${reserva.vaga}`;
      p_1.textContent = `${reserva.proprietario}`;
      p_2.textContent = `${reserva.placa}`;
      p_3.textContent = `${reserva.modelo} (${reserva.cor})`;

      div.appendChild(h3);
      div.appendChild(close);
      li.appendChild(div);
      li.appendChild(p_0);
      li.appendChild(p_1);
      li.appendChild(p_2);
      li.appendChild(p_3);
      listagem.appendChild(li);
    }
  }

  register() {
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
        vaga: formData.get("vaga"),
      };

      const isOccupied = this.controller
        .list()
        .find((reserva) => reserva.vaga === data.vaga);

      if (isOccupied) {
        alert(
          `Essa vaga já está ocupada pelo carro ${isOccupied.modelo}, do apartamento ${isOccupied.apartamento}, Bloco ${isOccupied.bloco}!`
        );
      } else {
        this.controller.register(data);
        window.location.href = `/index.html`;
      }
    });
  }

  delete() {
    const buttons = document.getElementsByClassName("card-close-btn");
    Array.from(buttons).forEach((closeBtn) => {
      closeBtn.addEventListener("click", (event) => {
        const elementUUID = event.target.parentNode.parentNode.id;
        if (
          confirm(
            "Tem certeza de que deseja excluir este registro? Esta ação é irreversível e não poderá ser desfeita."
          )
        ) {
          this.controller.delete(elementUUID);
          window.location.href = `/index.html`;
        }
      });
    });
  }
}
