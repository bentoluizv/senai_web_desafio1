import { ReservaController } from "./controllers/ReservaController";
import { ReservaModel } from "./models/ReservaModel";
import loadSampleData from "./utils/loadSampleData";
import { ReservaView } from "./views/ReservaView";

await loadSampleData();
const reservaModel = new ReservaModel();
const reservaController = new ReservaController(reservaModel);
const reservaView = new ReservaView(reservaController);

if (window.location.pathname === "/index.html") {
  reservaView.listar();
  reservaView.deletar();
}

if (window.location.pathname === "/cadastro.html") {
  reservaView.registrar();
}
