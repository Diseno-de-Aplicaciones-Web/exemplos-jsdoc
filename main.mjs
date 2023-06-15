// @ts-check
// A liña anterior activa a validación para JSDoc.
// O contido do arquivo jsconfig.json consegue o mesmo.

/** @type {String} */
let texto = "Mira, mira!"

/** @type {(Number|undefined)} */
let unNumero = 12

/** @type {(Number|undefined)} */
let outroNumero = "12"

/**
 * Tipo personalizado string o booleano
 * @typedef {(String|Boolean)} TextoOuBooleano
 */

/** @type {TextoOuBooleano} */
let unNumeroMais = 42

/** @type {TextoOuBooleano} */
let unTexto = "42"

/** @type {TextoOuBooleano} */
let ningunTexto = false

/**
 * Estructura das conta de usuario para o acceso á aplicación
 * @typedef {Object} Usuario
 * @property {String} username - Unique identifier for human use.
 * @property {String} password - Human secret for authentication.
 * @property {Boolean} enabled - Defines if the user account is usable.
 */

// É posible importar definicións de tipos para JSDoc.
/**
 * @typedef {import('./tipos.mjs').Turno} Turno
 */

/** @type {Turno} */
const turno1 = {
    diaDaSemana: "Luns",
    horaInicio: 9,
    horaFin: 10
}
/** @type {Turno} */
const turno2 = {
    diaDaSemana: "Luns",
    horaInicio: 10,
    horaFin: 11,
    conmutable: true
}
/** @type {Turno} */
const turnoMalFormado = {
    diaDaSemana: "Luns",
    horaInicio: 11,
    horaFin: 12,
    conmutable: "false"
}

/** @type {Usuario} */
const usuarioCorrecto = {
    username: "Daniel",
    password: "abc123.",
    enabled: true
}

/** @type {Usuario} */
const usuarioMalFormado = {
    username: "Daniel",
    password: "abc123.",
    enabled: "true"
}

/**
 * Función que imprime un __texto__ o número de veces que lle indiquemos.
 * @param {String} texto 
 * @param {Number} numeroDeVeces - ten que ser un número positivo.
 * @returns {Boolean}
 * @example imprimirVariasVeces("Sandman", 3)
 */
function imprimirVariasVeces(texto, numeroDeVeces) {
    if ( numeroDeVeces < 0 ) return false
    while ( numeroDeVeces ) {
        console.log(texto)
        numeroDeVeces = numeroDeVeces-1
    }
    return true
}

let seImprimio = imprimirVariasVeces("Hola!", 1000)
let seImprimioMal = imprimirVariasVeces("Hola!", "que tal")
seImprimioMal = "Que cosas"

/**
 * Podemos definir el tipo de los elementos de un array
 * @type {Turno[]}
 */
const turnos = [turno1, turno2, turnoMalFormado, 31, "32"]

/**
 * Podemos definir arrays mixtos (suele ser mala idea)
 * @type {(Turno|Usuario)[]}
 */
const turnosMezcladosConUsuarios = [turno1, turno2, turnoMalFormado, usuarioCorrecto, usuarioMalFormado, 42, "43"]

let nome = "Dani"
let idade = 21
let casado = true

/**
 * Tamén podemos definir datos que recibimos estructurados
 * como arrays ou obxectos. 
*/

/** @type {[String, Number, Boolean]} */
const usuarioTupla = [ nome, idade, casado ]
/** @type {{nome: String, idade: Number, casado: Boolean}} */
const usuarioObxeto = { nome, idade, casado }

/**
 * Isto é moi útil para documentar compoñentes de React ou os seus hooks.
 */

/**
 * Amosa a previsión meteorolóxica
 * @param {{temperatura:Number, ceo:String, forzaVento:Number, direccion:String}} props
*/
function ComponenteDeReact({temperatura, ceo, forzaVento, direccion}){
    /** @type {[Boolean, import("react").SetStateAction]} */
    const [visto, setVisto] = useState()
    return (<></>)
}