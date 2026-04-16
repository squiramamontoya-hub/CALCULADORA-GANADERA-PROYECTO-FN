let data = Storage.get("ganado");

function calcular() {
  const tipo = document.getElementById("tipoProducto").value;
  const animal = document.getElementById("animal").value.trim();
  const cantidad = +document.getElementById("cantidad").value;
  const precioUnitario = +document.getElementById("precioUnitario").value;

  if (!animal || !cantidad || !precioUnitario) {
    return alert("Completa todos los datos");
  }

  const ingreso = cantidad * precioUnitario;
  const ganancia = ingreso; // puedes ajustar si quieres restar costos

  resultadoBox.innerHTML = `
    <h3>Resultado</h3>
    <p><b>Animal:</b> ${animal}</p>
    <p><b>Producto:</b> ${tipo}</p>
    <p><b>Cantidad:</b> ${cantidad}</p>
    <p><b>Precio unitario:</b> $${precioUnitario}</p>
    <p><b>Ingreso:</b> $${ingreso}</p>
    <p><b>Ganancia:</b> $${ganancia}</p>
  `;

  data.push({
    id: Date.now(),
    numero: data.length + 1,
    animal,
    tipo,
    cantidad,
    precioUnitario,
    ingreso,
    ganancia
  });

  Storage.save("ganado", data);
  UI.render(data);
}

function eliminar(id) {
  data = data.filter(i => i.id !== id);
  data.forEach((i, index) => i.numero = index + 1);
  Storage.save("ganado", data);
  UI.render(data);
}

function limpiar() {
  if (!confirm("¿Eliminar todo el historial?")) return;

  data = [];
  Storage.save("ganado", data);
  UI.render(data);
  resultadoBox.innerHTML = "";
}

UI.render(data);
