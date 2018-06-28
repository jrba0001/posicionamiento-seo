var form = document.getElementsByName("contacto")[0];

var nombreInput = document.getElementById("nombre");
var apellidosInput = document.getElementById("apellidos");
var emailInput = document.getElementById("email");
var numeroInput = document.getElementById("numero");
var conocidoInput = document.getElementById("conocido");
var submitButton = document.getElementById("enviar");
var otraForma = document.getElementById("otra-forma");
var textoArea = document.getElementById("textolargo");

conocidoInput.addEventListener("change", function () {
  if (conocidoInput.selectedIndex == 3) {
    otraForma.classList.add("muestra");
  } else {
    otraForma.classList.remove("muestra");
  }
});

form.addEventListener("submit", function (event) {
  if (nombreInput.checkValidity() === false) {
    alert("Tienes que escribir tu nombre");
    nombreInput.focus();
    event.preventDefault();
    return false;
  }

  if (apellidosInput.checkValidity() === false) {
    alert("Tienes que escribir tu apellidos");
    apellidosInput.focus();
    event.preventDefault();
    return false;
  }

  var regex = /[A-Za-z0-9\.\+]+@[A-Za-z0-9]+\.[A-Za-z0-9\.]+/;
  var resultEmailValidation = regex.test(emailInput.value);

  if (resultEmailValidation === false) {
    alert("Tienes que escribir un email correcto");
    emailInput.focus();
    event.preventDefault();
    return false;
  }

  var telefonoregex = /^\d{9}$/;
  var resultvaltelefono = telefonoregex.test(numeroInput.value);
  if (resultvaltelefono === false) {
    alert("Tienes que escribir un numero correcto");
    numeroInput.focus();
    event.preventDefault();
    return false;
  }
  if (textoArea.value.split(" ").length > 150) {
    alert("El mensaje no puede contener más de 150 palabras");
    textoArea.focus();
    event.preventDefault();
    return false;
    submitButton.setAttribute("disabled", "");
    event.preventDefault();
  }
  setTimeout(function () {
    form.reset();
    sendNotification("Formulario recibido", "Gracias por participar");
    submitButton.removeAttribute("disabled");
  }, 1000);
});
textoArea.onchange = ("change",
  function () {
    textoArea.value = textoArea.value.replace(/(^\s*)|(\s*$)/gi, "");
    textoArea.value = textoArea.value.replace(/[ ]{2,}/gi, " ");
    textoArea.value = textoArea.value.replace(/\n /, "\n");
    textoAreaDividido = textoArea.value.split(" ");
    numeroPalabras = textoAreaDividido.length;
    console.log(numeroPalabras);
    if (numeroPalabras > 150) {
      alert("Texto excedido máximo son: 150 palabras");
    }
  });