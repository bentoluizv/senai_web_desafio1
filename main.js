import { ReservaController } from "./controllers/ReservaController";
import { ReservaModel } from "./models/ReservaModel";
import loadSampleData from "./utils/loadSampleData";
import { ReservaView } from "./views/ReservaView";

await loadSampleData();

const reservaModel = new ReservaModel();
const reservaController = new ReservaController(reservaModel);
const reservaView = new ReservaView(reservaController);

if (
  window.location.pathname === "/index.html" ||
  window.location.pathname === "/"
) {
  reservaView.list();
  reservaView.delete();
}

if (window.location.pathname === "/cadastro.html") {
  reservaView.register();
}
