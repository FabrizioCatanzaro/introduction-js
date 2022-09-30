/* let miNombre
miNombre = "Rodrigo Palacio"

let mensajeBienvenida = 'Bienvenidos a todos'

console.log("Hola hoy es la intro JS")
console.log(miNombre)
console.log(mensajeBienvenida)

miNombre = 'Hugo'

console.log(miNombre)

const miApellido = "Ibarra"

let miEdad = 45
let esMayor = true

console.log(typeof miApellido);
console.log(typeof miEdad);
console.log(typeof esMayor);

const numeroUno = 10
const numeroDos = 5

const resultado = numeroUno / numeroDos

console.log(resultado)

console.log(miNombre + " " + miApellido) */

/* let nombreUsuario = prompt( 'Ingrese su nombre' )

console.log(typeof nombreUsuario);

console.log(nombreUsuario); */

/* ------------------- EJERCICIO DE DISCORD ------------------------ */


/* let miNombre = "Fabrizio"
let miApellido = "Catanzaro Pfahler"
let miEdad = 22
let miMascota = "Pancho"
let edadMascota = 12

console.log(miNombre)
console.log(miApellido)
console.log(miEdad)
console.log(miMascota)
console.log(edadMascota)

let nombreCompleto = miNombre + " " + miApellido
let textoPresentacion = "Mi nombre es " + miNombre + " " + miApellido + " y tengo " + miEdad + " años. Tengo un perro que se llama " + miMascota + " y esta semana cumplió " + edadMascota + " años."

let sumaEdades = miEdad + edadMascota
let restaEdades = miEdad - edadMascota
let productoEdades = miEdad * edadMascota
let divisionEdades = miEdad / edadMascota

console.log(nombreCompleto)
console.log(textoPresentacion)
console.log(sumaEdades)
console.log(restaEdades)
console.log(productoEdades)
console.log(divisionEdades)

miNombre = prompt( "Ingrese su nombre" )
miApellido = prompt ( "Ingrese su apellido" )
miEdad = Number(prompt ( "Ingrese su edad" ))
miMascota = prompt ( "Ingrese el nombre de su mascota" )
edadMascota = Number (prompt ( "Ingrese la edad de su mascota" ))

console.log(miNombre)
console.log(miApellido)
console.log(miEdad)
console.log(miMascota)
console.log(edadMascota)

nombreCompleto = miNombre + " " + miApellido
textoPresentacion = "Mi nombre es " + miNombre + " " + miApellido + " y tengo " + miEdad + " años. Tengo un perro que se llama " + miMascota + " y esta semana cumplió " + edadMascota + " años."

sumaEdades = miEdad + edadMascota
restaEdades = miEdad - edadMascota
productoEdades = miEdad * edadMascota
divisionEdades = miEdad / edadMascota

console.log(nombreCompleto)
console.log(textoPresentacion)
console.log(sumaEdades)
console.log(restaEdades)
console.log(productoEdades)
console.log(divisionEdades)
 */

/* ------------------ DECLARANDO OBJETOS ----------------- */

/* let gato = {
    nombre: 'Pamela',
    edad: 2,
    color: 'Blanco',
    raza: 'Calle'
}

console.log(gato)
console.log(typeof gato) 
console.table(gato)

console.log(gato.nombre)

gato.sexo = 'Femenino'
delete gato.raza
console.log(gato) */

/*  ---------- HACER UN ARRAY -------------- */

/* let frutas = [ "Manzana", "Pera", "Kiwi", "Naranja" ]

let mentores = [
    {
        nombre : "Nicolas",
        edad : 28
    },
    {
        nombre : "Lucre",
        edad : 27
    },
    {
        nombre : "Cami",
        edad : 28
    }
]
console.log(mentores)

console.log(frutas)
 */
/* -------------11------------ */
let alumno = {
    nombre: "Fabrizio",
    edad: 22,
    localidad: "Merlo",
    pais: "Argentina",
    institucion: "MindHub",
}

console.table(alumno)
console.log(alumno.nombre)
console.log(alumno.edad)
console.log(alumno.localidad)
console.log(alumno.pais)
console.log(alumno.institucion)

/* ------------ 12 ---------------- */
let mascota = {
    nombre: "Pancho",
    raza: "Callejero",
    edad: 12,
    hijos: 0,
    color: "negro",
}

console.table(mascota)

console.log(mascota.nombre)
console.log(mascota.raza)
console.log(mascota.edad)
console.log(mascota.hijos)
console.log(mascota.color)

/* ------------- 13 ------------ */

let frutas = [ "Pera", "Frutilla", "Naranja", "Guayaba", "Tomate" ]

console.log(frutas)

console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])

/* ---------------- 14 -------------- */

let numeros = [ 11, 07, 2000, 42, 627 ]

console.log(numeros)

console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

/* ---------------- 15 --------------- */

let familia = [ "Lionel", "Antonella", "Thiago", "Ciro", "Mateo"]

console.log(familia)

console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])

/* ------------- 16 ------------ */

let textoAleatorio = frutas[1] + " " + numeros[3] + " " + familia[4]

console.log(textoAleatorio)