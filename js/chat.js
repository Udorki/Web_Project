window.onload = initialize;

const EDITAR = "Editar";
const AGREGAR = "Agregar";
var modo = AGREGAR;
var claveAEditar;

function initialize(){
  var refMensajes = firebase.database().ref().child("mensajes");
  var formulario = document.getElementById("formulario");
  formulario.addEventListener("submit", submitMessage);
  const txtEmail = document.getElementById("txtEmail");
  const txtPassword = document.getElementById("txtPassword");
  const btnLogin = document.getElementById("btnLogin");
  const btnSignUp = document.getElementById("btnSignUp");
  const btnLogout = document.getElementById("btnLogout");
  const errorMessage = document.getElementById("errorMessage");
  //EventoLogin
  btnLogin.addEventListener("click", e => {
    //De aqui se obtienen el email y password
    const email = txtEmail.value;
    const password = txtPassword.value;
    const auth = firebase.auth();
    //Sign in
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch(e => {
      errorMessage.innerHTML = "Usuario no identificado o contraseña errónea."
      txtEmail.value = "";
      txtPassword.value = "";
    });
  });

  //EventoSignUp
  btnSignUp.addEventListener("click", e => {
    //Todavía no se ha añadido que sea un email autentico
    const email = txtEmail.value;
    const password = txtPassword.value;
    const auth = firebase.auth();
    //Creará Usuarios
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
  });

  btnLogout.addEventListener("click", e => {
    firebase.auth().signOut();
  });

  //Añadimos un listener en tiempo preventDefault
  firebase.auth().onAuthStateChanged( firebaseUser => {
    if (firebaseUser){
      console.log(firebaseUser);
      btnLogout.classList.remove("hide");
      btnLogin.classList.add("hide");
      btnSignUp.classList.add("hide");
      txtPassword.classList.add("hide");
      txtEmail.classList.add("hide");
      chat.classList.remove("hide");
      errorMessage.innerHTML = "";

      refMensajes.on("value", refresh);

      // proveAdmin();
    } else {
      console.log("No logueado");
      btnLogout.classList.add("hide");
      btnLogin.classList.remove("hide");
      btnSignUp.classList.remove("hide");
      txtPassword.classList.remove("hide");
      txtEmail.classList.remove("hide");
      chat.classList.add("hide");
      txtEmail.value = "";
      txtPassword.value = "";
    }//FinElse
  });

}

function proveAdmin(){
  var buttons = document.getElementsByClassName("glyphicon");
  var user = firebase.auth().currentUser;
  if(user.uid == "4Mw0tER04tQEAglteaUMgJDatO12"){
    for(var i = 0; i < buttons.length; i++){
      buttons[i].classList.remove("hide");
    }
  }
}

function deleteMessage(event){
  var elementoABorrar = event.target;
  var refaBorrar = elementoABorrar.getAttribute("data-clave");
  var refmensajeABorrar = firebase.database().ref().child("mensajes").child(refaBorrar); //Recordatorio, cuando hagas ref(referencia), recuerda que debe ser EXACTAMENTE IGUAL a lo que hagas referencia.
  refmensajeABorrar.remove();
}

function refresh(snapshot){
  var datos = snapshot.val();
  var todosLosMensajes = "";
  for(var key in datos){
    todosLosMensajes += "<p>"+"<strong>"+ datos[key].nombre + " dice: "+ "</strong>" + datos[key].mensaje +
    " "+'<button class="glyphicon glyphicon-pencil btn btn-info hide" data-clave="' + key + '"></button>' + " "+
    '<button class="glyphicon glyphicon-trash btn btn-danger hide" data-clave="' + key + '"></button>'+"</p>";
  }
  document.getElementById("mensaje").innerHTML = todosLosMensajes;
  proveAdmin();
  takeEvents();
}

function submitMessage(event){
  event.preventDefault();
  var formulario = event.target;
  var refMensajes = firebase.database().ref().child("mensajes");
  switch(modo){
    case AGREGAR:{
      refMensajes.push({
        nombre: formulario.name.value,
        mensaje: formulario.message.value
      });
      formulario.name.value = "";
      formulario.message.value = "";
      break;
    }
    case EDITAR:{
      refMensajes.child(claveAEditar).update({
        nombre: formulario.name.value,
        mensaje: formulario.message.value
      });
      formulario.name.value = "";
      formulario.message.value = "";
      modo = AGREGAR;
      document.getElementById("submit").innerHTML = modo;
      break;
    }
  }
}

function takeEvents(){
  var mensajeABorrar = document.getElementsByClassName("glyphicon-trash");
  for (var i = 0; i < mensajeABorrar.length;i++){
    mensajeABorrar[i].addEventListener("click", deleteMessage);
  }
  var mensajeAEditar = document.getElementsByClassName("glyphicon-pencil");
  for (var i = 0; i < mensajeAEditar.length;i++){
    mensajeAEditar[i].addEventListener("click", editMessage);
  }
}

function editMessage(event){
  modo = EDITAR;
  document.getElementById("submit").innerHTML = modo;
  var botonDelMensajeAEditar = event.target;
  claveAEditar = botonDelMensajeAEditar.getAttribute("data-clave");
  var formulario = document.getElementById("formulario");

  var refMensajes = firebase.database().ref().child("mensajes");
  refMensajes.child(claveAEditar).once("value", function(snapshot){
    var datos = snapshot.val();
    formulario.name.value = datos.nombre;
    formulario.message.value = datos.mensaje;
  });
}
