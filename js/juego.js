window.onload = initialize;
var dark = false;
var correctas = 0;
var erroneas  = 0;

function initialize(){
  var botones = document.getElementsByClassName("button");
  var refFormularios = firebase.database().ref().child("formularios");
  refFormularios.on("value", showTable);
  for(var i = 0; i < botones.length; i++){
    botones[i].addEventListener("mouseover", removeShadow);
    botones[i].addEventListener("mouseout", putShadow);
  }
  var quiz = document.getElementById("quiz");
  quiz.addEventListener("submit", correctForm);
  quiz.addEventListener("reset", resetForm);
  var botonCambiarPaneles = document.getElementById("cambioPanel");
  botonCambiarPaneles.addEventListener("click", changePanel);
  document.getElementById("rss").addEventListener("click", showRss);
}

function changePanel(){
  dark = !dark;
  var panel = document.getElementsByClassName("panel");
  for(var i = 0; i < panel.length; i++){
    panel[i].className = "panel panel-" + (dark ? "success" : "primary");
  }
}

function resetForm(){
  document.getElementById("obligatorio").innerHTML = "";
  document.getElementById("obligatorio1").innerHTML = "";
  document.getElementById("obligatorio2").innerHTML = "";
  document.getElementById("obligatorio3").innerHTML = "";
  document.getElementById("obligatorio4").innerHTML = "";
  document.getElementById("obligatorio5").innerHTML = "";
  document.getElementById("obligatorio6").innerHTML = "";
  document.getElementById("obligatorio7").innerHTML = "";
  document.getElementById("obligatorio8").innerHTML = "";
  document.getElementById("obligatorio9").innerHTML = "";
  document.getElementById("obligatorio10").innerHTML = "";
  document.getElementById("obligatorio11").innerHTML = "";
  document.getElementById("obligatorio12").innerHTML = "";
  document.getElementById("obligatorio13").innerHTML = "";
  document.getElementById("obligatorio14").innerHTML = "";
  document.getElementById("mensaje").innerHTML = "";
  document.getElementById("correctas").innerHTML = "";
  document.getElementById("mensaje_malo").innerHTML = "";
  document.getElementById("erroneas").innerHTML = "";
  document.getElementById("table").classList.add("hide");
  correctas = 0;
  erroneas = 0;
}

function removeShadow(event){
  var boton = event.target;
  boton.style.boxShadow = "0px 0px 0px grey";
}

function putShadow(event){
  var boton = event.target;
  boton.style.boxShadow = "5px 5px 3px grey";
}

function correctForm(event){
  var quiz = event.target;
  correctas = 0;
  erroneas = 0;

  if(quiz.name.value == ""){
    document.getElementById("obligatorio").innerHTML = "*Nombre obligatorio.";
    document.getElementById("identificador").scrollIntoView();
    event.preventDefault();
    return;
  } else {
    document.getElementById("obligatorio").innerHTML = "";
  }

  if (quiz.Pregunta1.value == ""){
    document.getElementById("obligatorio1").innerHTML = "*Pregunta 1 no puede estar vacía.";
    document.getElementById("Pregunta1").scrollIntoView();
    event.preventDefault();
    return;
  } else {
    document.getElementById("obligatorio1").innerHTML = "";
  }

  if (quiz.Pregunta2.value == ""){
    document.getElementById("obligatorio2").innerHTML = "*Pregunta 2 no puede estar vacía.";
    document.getElementById("Pregunta2").scrollIntoView();
    event.preventDefault();
    return;
  } else {
    document.getElementById("obligatorio2").innerHTML = "";
  }

  if (quiz.Pregunta3.value == ""){
    document.getElementById("obligatorio3").innerHTML = "*Pregunta 3 no puede estar vacía.";
    document.getElementById("Pregunta3").scrollIntoView();
    event.preventDefault();
    return;
  } else {
    document.getElementById("obligatorio3").innerHTML = "";

  }

  if (quiz.Pregunta5.value == ""){
    document.getElementById("obligatorio4").innerHTML = "*Pregunta 5 no puede estar vacía.";
    document.getElementById("Pregunta4").scrollIntoView();
    event.preventDefault();
    return;
  } else {
    document.getElementById("obligatorio4").innerHTML = "";

  }

  if (quiz.Pregunta6.value == ""){
    document.getElementById("obligatorio5").innerHTML = "*Pregunta 6 no puede estar vacía.";
    document.getElementById("Pregunta5").scrollIntoView();
    event.preventDefault();
    return;
  } else {
    document.getElementById("obligatorio5").innerHTML = "";
  }

  if (quiz.Pregunta9.value == ""){
    document.getElementById("obligatorio6").innerHTML = "*Pregunta 9 no puede estar vacía.";
    document.getElementById("Pregunta6").scrollIntoView();
    event.preventDefault();
    return;
  } else {
    document.getElementById("obligatorio6").innerHTML = "";
  }

  if (quiz.Pregunta11.value == ""){
    document.getElementById("obligatorio7").innerHTML = "*Pregunta 11 no puede estar vacía.";
    document.getElementById("Pregunta7").scrollIntoView();
    event.preventDefault();
    return;
  } else {
    document.getElementById("obligatorio7").innerHTML = "";
  }

  if (quiz.Pregunta12.value == ""){
    document.getElementById("obligatorio8").innerHTML = "*Pregunta 12 no puede estar vacía.";
    document.getElementById("Pregunta8").scrollIntoView();
    event.preventDefault();
    return;
  } else {
    document.getElementById("obligatorio8").innerHTML = "";
  }

  if (quiz.Pregunta13.value == "Vacio"){
    document.getElementById("obligatorio9").innerHTML = "*Pregunta 13 no puede estar vacía.";
    document.getElementById("Pregunta9").scrollIntoView();
    event.preventDefault();
    return;
  } else {
    document.getElementById("obligatorio9").innerHTML = "";
  }

  if (quiz.Pregunta14.value == "Vacio"){
    document.getElementById("obligatorio10").innerHTML = "*Pregunta 14 no puede estar vacía.";
    document.getElementById("Pregunta10").scrollIntoView();
    event.preventDefault();
    return;
  } else {
    document.getElementById("obligatorio10").innerHTML = "";
  }

  if (quiz.Pregunta15.value == "Vacio"){
    document.getElementById("obligatorio11").innerHTML = "*Pregunta 15 no puede estar vacía.";
    document.getElementById("Pregunta11").scrollIntoView();
    event.preventDefault();
    return;
  } else {
    document.getElementById("obligatorio11").innerHTML = "";
  }

  if (quiz.Pregunta16.value == "Vacio"){
    document.getElementById("obligatorio12").innerHTML = "*Pregunta 16 no puede estar vacía.";
    document.getElementById("Pregunta12").scrollIntoView();
    event.preventDefault();
    return;
  } else {
    document.getElementById("obligatorio12").innerHTML = "";
  }

  if (quiz.Pregunta17.value == "Vacio"){
    document.getElementById("obligatorio13").innerHTML = "*Pregunta 17 no puede estar vacía.";
    document.getElementById("Pregunta13").scrollIntoView();
    event.preventDefault();
    return;
  } else {
    document.getElementById("obligatorio13").innerHTML = "";
  }

  if (quiz.Pregunta18.value == "Vacio"){
    document.getElementById("obligatorio14").innerHTML = "*Pregunta 18 no puede estar vacía.";
    document.getElementById("Pregunta14").scrollIntoView();
    event.preventDefault();
    return;
  } else {
    document.getElementById("obligatorio14").innerHTML = "";
  }

  if (quiz.Pregunta1.value == "Asia"){
    correctas++;
  } else {
    erroneas++;
  }

  if (quiz.Pregunta2.value == "Correcta"){
    correctas++;
  } else {
    erroneas++;
  }

  if (quiz.Pregunta3.value == "Correcta"){
    correctas++;
  } else {
    erroneas++;
  }

  if (quiz.checkbox1.checked && quiz.checkbox2.checked){
    if (quiz.checkbox3.checked && quiz.checkbox4.checked){
      if (quiz.checkbox5.checked){
        correctas++
      }else {
        erroneas++;
      }
    } else {
      erroneas++;
    }
  } else {
    erroneas++;
  }

  if (quiz.Pregunta5.value == "Correcta"){
    correctas++;
  } else {
    erroneas++;
  }

  if (quiz.Pregunta6.value == "Correcta"){
    correctas++;
  } else {
    erroneas++;
  }

  if (quiz.checkbox1_1.checked && quiz.checkbox2_1.checked){
    if (quiz.checkbox3_1.checked && quiz.checkbox4_1.checked){
      if (quiz.checkbox5_1.checked && quiz.checkbox6_1.checked){
        correctas++;
      }else {
        erroneas++;
      }
    }else {
      erroneas++;
    }
  } else {
    erroneas++;
  }

  if (quiz.checkbox1_2.checked && quiz.checkbox2_2.checked){
    if (quiz.checkbox3_2.checked && quiz.checkbox4_2.checked) {
      correctas++;
    }else {
      erroneas++;
    }
  } else {
    erroneas++;
  }

  if (quiz.Pregunta9.value == "Correcta"){
    correctas++;
  } else {
    erroneas++;
  }

  if (quiz.checkbox1_3.checked && quiz.checkbox2_3.checked){
    if (quiz.checkbox3_3.checked && quiz.checkbox4_3.checked) {
      if (quiz.checkbox5_3.checked) {
        correctas++;
      }else {
        erroneas++;
      }
    }else {
      erroneas++;
    }
  } else {
    erroneas++;
  }

  if (quiz.Pregunta11.value == "Correcta"){
    correctas++;
  } else {
    erroneas++;
  }

  if (quiz.Pregunta12.value == "Correcta"){
    correctas++;
  } else {
    erroneas++;
  }

  if (quiz.Pregunta13.value == "Correcta"){
    correctas++;
  } else {
    erroneas++;
  }

  if (quiz.Pregunta14.value == "Correcta"){
    correctas++;
  } else {
    erroneas++;
  }

  if (quiz.Pregunta15.value == "Correcta"){
    correctas++;
  } else {
    erroneas++;
  }

  if (quiz.Pregunta16.value == "Correcta"){
    correctas++;
  } else {
    erroneas++;
  }

  if (quiz.Pregunta17.value == "Correcta"){
    correctas++;
  } else {
    erroneas++;
  }

  if (quiz.Pregunta18.value == "Correcta"){
    correctas++;
  } else {
    erroneas++;
  }

  saveData(event);
  event.preventDefault();
  document.getElementById("despues").style.visibility = "visible";
  document.getElementById("mensaje").innerHTML = "¡Enhorabuena!";
  document.getElementById("correctas").innerHTML = "Has acertado "+correctas+".";
  document.getElementById("mensaje_malo").innerHTML = "¡Que pena!";
  document.getElementById("erroneas").innerHTML = "Has fallado "+erroneas+".";
  document.getElementById("table").classList.remove("hide");
}

function saveData(event){
  var quiz = event.target;

  var refFormularios = firebase.database().ref().child("formularios");
  refFormularios.push({
    Name: quiz.name.value,
    Pregunta1: quiz.Pregunta1.value,
    Pregunta2: quiz.Pregunta2.value,
    Pregunta3: quiz.Pregunta3.value,
    Pregunta4: quiz.checkbox1.checked && quiz.checkbox2.checked && quiz.checkbox3.checked && quiz.checkbox4.checked && quiz.checkbox5.checked,
    Pregunta5: quiz.Pregunta5.value,
    Pregunta6: quiz.Pregunta6.value,
    Pregunta7: quiz.checkbox1_1.checked && quiz.checkbox2_1.checked && quiz.checkbox3_1.checked && quiz.checkbox4_1.checked && quiz.checkbox5_1.checked && quiz.checkbox6_1.checked,
    Pregunta8: quiz.checkbox1_2.checked && quiz.checkbox2_2.checked && quiz.checkbox3_2.checked && quiz.checkbox4_2.checked,
    Pregunta9: quiz.Pregunta9.value,
    Pregunta10: quiz.checkbox1_3.checked && quiz.checkbox2_3.checked && quiz.checkbox3_3.checked && quiz.checkbox4_3.checked && quiz.checkbox5_3.checked,
    Pregunta11: quiz.Pregunta11.value,
    Pregunta12: quiz.Pregunta12.value,
    Pregunta13: quiz.Pregunta13.value,
    Pregunta14: quiz.Pregunta14.value,
    Pregunta15: quiz.Pregunta15.value,
    Pregunta16: quiz.Pregunta16.value,
    Pregunta17: quiz.Pregunta17.value,
    Pregunta18: quiz.Pregunta18.value
  });
}

function showTable(snapshot){
  var data = snapshot.val();
  var resultadosUsuarios = "";
  var tableBody = document.getElementById("tableBody");
  for(var key in data){
    resultadosUsuarios += "<tr>"+
    "<td>"+data[key].Name+"</td>"+
    "<td>"+data[key].Pregunta1+"</td>"+
    "<td>"+data[key].Pregunta2+"</td>"+
    "<td>"+data[key].Pregunta3+"</td>"+
    "<td>"+data[key].Pregunta4+"</td>"+
    "<td>"+data[key].Pregunta5+"</td>"+
    "<td>"+data[key].Pregunta6+"</td>"+
    "<td>"+data[key].Pregunta7+"</td>"+
    "<td>"+data[key].Pregunta8+"</td>"+
    "<td>"+data[key].Pregunta9+"</td>"+
    "<td>"+data[key].Pregunta10+"</td>"+
    "<td>"+data[key].Pregunta11+"</td>"+
    "<td>"+data[key].Pregunta12+"</td>"+
    "<td>"+data[key].Pregunta13+"</td>"+
    "<td>"+data[key].Pregunta14+"</td>"+
    "<td>"+data[key].Pregunta15+"</td>"+
    "<td>"+data[key].Pregunta16+"</td>"+
    "<td>"+data[key].Pregunta17+"</td>"+
    "<td>"+data[key].Pregunta18+"</td>"+
    "</tr>";
  }
  tableBody.innerHTML = resultadosUsuarios;
}

function showRss(){
  createRSS();
}

function createRSS(){
  var myRSS ='<?xml version="1.0" encoding="UTF-8"?>';
  myRSS += '<rss version="2.0">';
  myRSS += '<channel>';
  myRSS += '<title>Canal RSS</title>';
  myRSS += '<link>juego.html</link>';
  myRSS += '<description>Resultados de cada usuario.</description>'
  var myNews = firebase.database().ref().child("formularios");
  myNews.once("value", function(snapshot){
    var data = snapshot.val();
    var url = "juego.html";
    for (var key in data) {
      myRSS += "<item>";
      myRSS += '<title>'+"Resultados de "+data[key].Name+'</title>';
      myRSS += "<link>"+url+"</link>";
      myRSS += '<respuesta1>'+"Ha respondido "+data[key].Pregunta1+" a la pregunta 1."+'</respuesta1>'
      myRSS += '<respuesta2>'+"Ha respondido "+data[key].Pregunta2+" a la pregunta 2."+'</respuesta2>'
      myRSS += '<respuesta3>'+"Ha respondido "+ data[key].Pregunta3+ " a la pregunta 3."+'</respuesta3>'
      myRSS += '<respuesta4>'+"Ha respondido "+ data[key].Pregunta4+ " a la pregunta 4."+'</respuesta4>'
      myRSS += '<respuesta5>'+"Ha respondido "+ data[key].Pregunta5+ " a la pregunta 5."+'</respuesta5>'
      myRSS += '<respuesta6>'+"Ha respondido "+ data[key].Pregunta6+ " a la pregunta 6."+'</respuesta6>'
      myRSS += '<respuesta7>'+"Ha respondido "+ data[key].Pregunta7+ " a la pregunta 7."+'</respuesta7>'
      myRSS += '<respuesta8>'+"Ha respondido "+ data[key].Pregunta8+ " a la pregunta 8."+'</respuesta8>'
      myRSS += '<respuesta9>'+"Ha respondido "+ data[key].Pregunta9+ " a la pregunta 9."+'</respuesta9>'
      myRSS += '<respuesta10>'+"Ha respondido "+ data[key].Pregunta10+ " a la pregunta 10."+'</respuesta10>'
      myRSS += '<respuesta11>'+"Ha respondido "+ data[key].Pregunta11+ " a la pregunta 11."+'</respuesta11>'
      myRSS += '<respuesta12>'+"Ha respondido "+ data[key].Pregunta12+ " a la pregunta 12."+'</respuesta12>'
      myRSS += '<respuesta13>'+"Ha respondido "+ data[key].Pregunta13+ " a la pregunta 13."+'</respuesta13>'
      myRSS += '<respuesta14>'+"Ha respondido "+ data[key].Pregunta14+ " a la pregunta 14."+'</respuesta14>'
      myRSS += '<respuesta15>'+"Ha respondido "+ data[key].Pregunta15+ " a la pregunta 15."+'</respuesta15>'
      myRSS += '<respuesta16>'+"Ha respondido "+ data[key].Pregunta16+ " a la pregunta 16."+'</respuesta16>'
      myRSS += '<respuesta17>'+"Ha respondido "+ data[key].Pregunta17+ " a la pregunta 17."+'</respuesta17>'
      myRSS += '<respuesta18>'+"Ha respondido "+ data[key].Pregunta18+ " a la pregunta 18."+'</respuesta18>'
      myRSS += "</item>";
    }
    myRSS += '</channel>';
    myRSS += '</rss>';

    console.log(myRSS);

    window.open("data:type:rss.xml,"+encodeURIComponent(myRSS),"Test", "width=300,height=300,scrollbars=1,resizable=1");
  });
}
