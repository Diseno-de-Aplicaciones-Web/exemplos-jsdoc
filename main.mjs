
/**
 * Documentar tipos de datos de variables
 */

/** @type {String} */
let texto = "Mira, mira!"

/** @type {(Number|undefined)} */
let numeroDeVeces

/**
 * Documentar funcións
 */

/**
 * Imprime un texto o número de veces que lle indiquemos
 * numeroDeVeces ten que ser un número positivo
 * @param {String} texto 
 * @param {Number} numeroDeVeces
 * @returns {Boolean}
 */
function imprimirVariasVeces(texto, numeroDeVeces) {
    if ( numeroDeVeces < 0 ) return false
    while ( numeroDeVeces ) {
        console.log(texto)
        numeroDeVeces = numeroDeVeces-1
    }
    return true
}