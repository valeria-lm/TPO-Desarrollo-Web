const copyright = document.querySelector("#copyright");
const date = new Date();
const year = date.getFullYear();

// insertar año en html
copyright.innerHTML = `© ${year}. Copyright Tienda AVA Café. Todos los derechos reservados`;

/* ------------------------------ */

// cambiar color del nav al hacer scroll
window.addEventListener("scroll", function () {
  let nav = document.querySelector("nav");
  nav.classList.toggle("nav-scroll", window.scrollY > 0);
});

/* ------------------------------ */

// validación form: contacto.html
const nombreApellido = document.getElementById("nombre-y-apellido");
const correoElectronico = document.getElementById("correo-electronico");
const telefono = document.getElementById("telefono");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (nombreApellido.value === "" || nombreApellido.value == null) {
    messages.push("*Es necesario su nombre y apellido");
  }

  if (correoElectronico.value === "" || correoElectronico.value == null) {
    messages.push("*Es necesario su mail");
  }

  if (telefono.value === "" || telefono.value == null) {
    messages.push("*Es necesario su número de telefono");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  }
});
