function guardarNombre () {

const nombre = document.getElementById("nombre")

const nombres = nombre.value

guardar.addEventListener("click", guardarNombre)

localStorage.setItem("nom", "nombres")

console.log(localStorage.getItem("nom"))
