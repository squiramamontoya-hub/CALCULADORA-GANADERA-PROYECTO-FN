let usuarios = Storage.get("usuarios");

function login(){
  const u=user.value.trim();
  const p=pass.value.trim();

  const ok=usuarios.find(x=>x.u===u && x.p===p);

  if(ok){
    localStorage.setItem("login","true");
    loginScreen.style.display="none";
    app.style.display="block";
  } else {
    alert("Usuario o contraseña incorrectos");
  }
}

function registrar(){
  const u=user.value.trim();
  const p=pass.value.trim();

  if(!u || !p) return alert("Completa");

  if(usuarios.find(x=>x.u===u)) return alert("Usuario ya existe");

  usuarios.push({u,p});
  Storage.save("usuarios",usuarios);
  alert("Usuario creado");
}

function logout(){
  localStorage.removeItem("login");
  location.reload();
}

window.onload=()=>{
  if(localStorage.getItem("login")){
    loginScreen.style.display="none";
    app.style.display="block";
  }
};