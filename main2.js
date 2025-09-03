
//let nombres = ["ana","juan","pedro","lucia"]

//let nomMayus = nombres.map (nombre => {

    // return nombre.toLocaleUpperCase()

//})
  //   console.log(nomMayus);
     



 //const aMayusculas = (texto) => {


      //let convertir = texto.toUpperCase();

      //return convertir
 //}
  

 //console.log(aMayusculas("hola"))








//let numeros = [2,6,8,10]


//let numeroTres = numeros.map((numero)  => {

    // return numero * 3


//})        

//console.log(numeroTres);







//let numeros = [2,6,8,10]

//let numeroTriple =  numeros.map(numero => numero * 3)   

//console.log(numeroTriple);


//let elementos = ["casa", "autos", "pelota", "animales"]

//let longElementos = elementos.filter(elemento => elemento.length >= 4)


//console.log(longElementos)





//const piedepagina = document.getElementsByClassName("pie").innerText = "Parrafo de la pagina"

//console.log(piedepagina);



//const titulodos = document.getElementsByClassName("titulosec").innerHTML= "HOLA MUNDO"


//console.log(titulodos);

//const parrafo = document.getElementById("parrafo").style.fontFamily="Arial";



//const cuerpo = document.getElementById("cuerpo").style.backgroundColor="red";


//const parrafodos = document.getElementById("p1").innerHTML = "Probando";


//const precio = document.getElementById("precio")
/*const cantidad = document.getElementById("cantidad")
const resultado = document.getElementById("resultado")
const total = document.getElementById("btn_total")

function multiplicar() {
    
    resultado.value = total.value = precio.value * cantidad.value
}


total.addEventListener("click" , multiplicar)*/




/*const guardar = document.getElementById("btnguardar")



function guardarNombre () {

const nombre = document.getElementById("nombre")

const nombres = nombre.value

guardar.addEventListener("click", guardarNombre)

localStorage.setItem("nom", "nombres")

console.log(localStorage.getItem("nom"))


}*/





/*const botonGuardar = document.getElementById('guardarBtn');

// 2. Añadir un escuchador de eventos al botón
botonGuardar.addEventListener('click', function() {
  // 3. Obtener el elemento input
  const inputNombre = document.getElementById('nombre');

  // 4. Obtener el valor del input
  const valorInput = inputNombre.value;

  // 5. Guardar el valor en localStorage
  localStorage.setItem('nombreUsuario', valorInput); // 'nombreUsuario' es la clave

  alert('Nombre guardado en Local Storage');

 console.log(localStorage.getItem('nombreUsuario'))

});*/



//Objeto persona
const persona= {

        nombre: "Dante",
        edad: 17,
        estudiante: true,
        hobbies: "jugar a las cartas",  
}

//Convertir el objeto persona a JSON
let convertir = JSON.stringify(persona);

console.log(convertir);


let titulo = document.getElementById("titulo").innerText = convertir












