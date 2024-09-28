export default async function loadSampleData() {
  try {
    const data = await import("../models/sample.json", {
      assert: { type: "json" },
    });
    const previousData = window.localStorage.getItem("reservas");

    if (!previousData) {
      window.localStorage.setItem("reservas", JSON.stringify(data.default));
    }
  } catch (err) {
    console.error("Error loading JSON:", err);
  }
}
