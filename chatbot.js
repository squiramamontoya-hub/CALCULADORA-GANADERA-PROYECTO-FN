function toggleChat(){
  chatBox.style.display = chatBox.style.display==="flex" ? "none" : "flex";
}

function chat(){
  const msg=chatInput.value.toLowerCase();
  let r="No tengo esa información.";

  if(msg.includes("comer")) r="Una vaca consume 2% a 3% de su peso diario.";
  else if(msg.includes("ganancia")) r="Ganancia = ingresos - costos.";
  else if(msg.includes("vacuna")) r="Vacunar cada 6 meses.";
  else if(msg.includes("engordar")) r="Buena alimentación y manejo.";

  chatMessages.innerHTML+=`<div><b>Tú:</b> ${msg}</div>`;
  chatMessages.innerHTML+=`<div><b>Bot:</b> ${r}</div>`;

  chatInput.value="";
}