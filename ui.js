const UI = {
  mostrar: id => {
    document.querySelectorAll("section").forEach(s => s.style.display = "none");
    document.getElementById(id).style.display = "block";
  },

  render: data => {
    historial.innerHTML = "";
    data.forEach(i => {
      historial.innerHTML += `
      <div>
        <b>Cálculo #${i.numero}</b><br>
        Animal: ${i.animal}<br>
        Producto: ${i.tipo}<br>
        Cantidad: ${i.cantidad}<br>
        Precio unitario: $${i.precioUnitario}<br>
        Ingreso: $${i.ingreso}<br>
        Ganancia: $${i.ganancia}<br>
        <button onclick="eliminar(${i.id})" class="btn-red">Eliminar</button>
      </div>`;
    });
  }
};
