// variables html
const copyright = document.querySelector("#copyright");

// create year
const date = new Date();
const year = date.getFullYear();

// insert year to html
copyright.innerHTML = `© ${year}. Copyright Tienda AVA Café. Todos los derechos reservados`;
