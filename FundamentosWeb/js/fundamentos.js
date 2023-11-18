console.log("hola desde el archivo fundamentos.js");

// comentario de una línea

/* 
comentario 
de
varias 
líneas
*/

/* Variable: es un espacio de memoria reservado para almacenar información */

/* let nombre = "Jonathan";
let Nombre = "Ulises";
let NOMBRE = "Miranda Charles"; */
//console.log(nombre, Nombre, NOMBRE);

let nombre = "Jonathan",
  apellidos = "MirCha",
  edad = 39,
  temperatura = 21.56,
  negativo = -18,
  tipoDeSangre = "O+",
  soyEstudiante = false,
  soyProfesor = true;

console.log(nombre, apellidos);
console.log(edad, temperatura, negativo);
console.log(tipoDeSangre, soyEstudiante, soyProfesor);

//Concatenación: el operador + une strings y variables, podemos usar "" o ''
let mensajeConcatenado =
  "Hola, mi nombre es " +
  nombre +
  " " +
  apellidos +
  ", tengo " +
  edad +
  " años y mi tipo de sangre es " +
  tipoDeSangre +
  ".";
console.log(mensajeConcatenado);

//Interpolación: Usa template strings `Cadena de texto ${variable}`;
let mensajeInterpolado = `Hola mi nombre es ${nombre} ${apellidos}, tengo ${edad} años y mi tipo de sangre es: ${tipoDeSangre}.`;

console.log(mensajeInterpolado);

/* Arrays / Arreglos -> es una lista de elementos */

let pasatiempos = ["Programar", "Hacer ejercicio", "Cocinar", "Andar en Bici"];
console.log(pasatiempos);
console.log(pasatiempos[1]);
console.log(pasatiempos.length);

let datosPersonales = [
  "jonmircha",
  39,
  true,
  ["Programar", ["Anda en Bici", "Pesas", "Calistenia"], "Cocinar"],
];

console.log(datosPersonales);
console.log(datosPersonales[3][1][1]);

/* DOM - Document Object Model */
console.log(document);

let $pasatiempos = document.querySelector("#pasatiempos");
console.log($pasatiempos);

let pasatiemposHTML = "";

pasatiempos.forEach(function (el) {
  pasatiemposHTML += `<li>${el}</li>`;
});

$pasatiempos.innerHTML = pasatiemposHTML;

/* 
Objects / objetos -> colección de datos agrupados en pares de clave:valor
*/

let objeto = {
  nombre: "Jon",
  edad: 39,
  esProgramador: true,
  pasatiempos: ["Programar", "Hacer ejercicio", "Cocinar", "Andar en Bici"],
  contacto: {
    redesSociales: "@jonmircha",
    correo: "jonmircha@gmail.com",
    movil: "5512345678",
  },
};

console.log(objeto);
console.log(objeto.nombre);
console.log(objeto.contacto.correo);
console.log(objeto.pasatiempos[3]);

/* 

Funciones

Son un conjunto de instrucciones (líneas de código) que van a ejecutar ciertas acciones.
Pueden recibir o no parámetros. Los parámetros son los datos que puede necesitar la función para internamente ejecutar sus sentencias.
Las funciones pueden o no retornar un valor, eso dependerá del propósito de la función.
*/

//Definición de función
function saludar() {
  console.log("Hola Mundo desde una función JS");
  console.log("Bienvenidos al maravilloso mundo de la Programación Web");
  console.log("JavaScript es el lenguaje de la Web");
}

//Ejecución o Invocación
saludar();
saludar();

function sumar(a, b) {
  let c = a + b;
  return c;
}

sumar(2, 3);
console.log(sumar(2, 3));

//Traer datos de un servicio o API externos
//FEtch
async function traerShowsTV() {
  let url = "https://api.tvmaze.com/search/shows?q=batman";
  let peticion = await fetch(url);
  console.log(peticion);
  let datos = await peticion.json();
  console.log(datos);

  let $tvShows = document.querySelector("#tv-shows");
  let tvShowsHTML = "";

  datos.forEach(function (el) {
    tvShowsHTML += `
      <article class="col-12 col-lg-4">
        <div class="card">
          <img src="${el.show.image.medium}" class="card-img-top" alt="${el.show.name}">
          <div class="card-body">
            <h5 class="card-title">${el.show.name}</h5>
            <p class="card-text">${el.show.summary}</p>
            <a href="${el.show.url}" target="_blank" class="btn btn-primary">Ver más</a>
          </div>
        </div>
      </article>
    `;
  });

  $tvShows.innerHTML = tvShowsHTML;
  console.log($tvShows.style);
  $tvShows.style.backgroundColor = "#222";
  $tvShows.style.color = "#eee";
  $tvShows.style.padding = "2rem";
  $tvShows.style.borderRadius = "2rem";
}

traerShowsTV();
