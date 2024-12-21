document.addEventListener("DOMContentLoaded", () => {
  // Manejo de Ganancias
  const gainsForm = document.getElementById("gains-form");
  const gainsList = document.getElementById("gains-list");

  gainsForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const description = document.getElementById("gain-description").value;
    const amount = document.getElementById("gain-amount").value;

    addEntryToList(description, `$${amount}`, gainsList);
    gainsForm.reset();
  });

  // Manejo de Producción
  const productionForm = document.getElementById("production-form");
  const productionList = document.getElementById("production-list");

  productionForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const item = document.getElementById("production-item").value;
    const quantity = document.getElementById("production-quantity").value;

    addEntryToList(item, `${quantity} unidades`, productionList);
    productionForm.reset();
  });

  // Manejo de Pérdidas
  const lossesForm = document.getElementById("losses-form");
  const lossesList = document.getElementById("losses-list");

  lossesForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const description = document.getElementById("loss-description").value;
    const amount = document.getElementById("loss-amount").value;

    addEntryToList(description, `-$${amount}`, lossesList);
    lossesForm.reset();
  });

  // Función para agregar entradas a la lista
  function addEntryToList(description, value, list) {
    const listItem = document.createElement("li");
    listItem.textContent = `${description} - ${value}`;
    list.appendChild(listItem);
  }
});
