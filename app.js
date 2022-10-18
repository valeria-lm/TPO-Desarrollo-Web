// se va actualizando el año del copyright del footer con el año actual correspondiente
const copyright = document.querySelector("#copyright");
const date = new Date();
const year = date.getFullYear();

copyright.innerHTML = `© ${year}. Copyright Tienda AVA Café. Todos los derechos reservados`;

// cambiar color del nav al hacer scroll
window.addEventListener("scroll", function () {
  let nav = document.querySelector("nav");
  nav.classList.toggle("nav-scroll", window.scrollY > 0);
});

// validación form: contacto.html
const nombreApellido = document.getElementById("nombre-y-apellido");
const correoElectronico = document.getElementById("correo-electronico");
const telefono = document.getElementById("telefono");
const mensaje = document.getElementById("mensaje");
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

  if (mensaje.value === "" || mensaje.value == null) {
    messages.push("*Es necesario que escriba su mensaje");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  }
});

document.getElementById("error").style.color = "red";

// API de formspree: contacto.html
form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    this.reset();
    alert("¡Gracias por contactarte, te escribiremos pronto!");
  }
}
