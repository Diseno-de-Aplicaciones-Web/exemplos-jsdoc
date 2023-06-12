# Introducción JSDoc

Documentar o noso código é unha cuestión de calidade e pode resultar imprescindible para posibilitar o traballo en equipo. O noso eu do futuro tamén agradecerá atopar os comentarios que deixemos no noso código na actualidade.

JSDoc é un xeito normalizado de incorporar comentarios no noso código para aclarar cómo funciona e cómo empregalo. Como indica o seu nome, JSDoc está pensado para JavaScript, pero as diferentes linguaxes de programación adoitan dispoñer de mecanismos similares.

## Formato dun comentario JSDoc

JSDoc emprega comentarios multilinea de JavaScript, pero engade un segundo asterisco na marca de apertura do comentario:

```js
/** Isto é un comentario JSDoc */
```


JSDoc proporcionanos unha serie de palabras reservadas ou __etiquetas para describir determinados aspectos do noso código. Estas palabras empezan sempre cunha `@`.

```js
/** @type {String} */
let contrasinal
```

Se é necesario podemos engadir aclaracións en linguaxe humana, sempre nas primeiras líñas do comentario.

```js
/** 
 * Contrasinal do usuario
 * @type {String}
 */
let contrasinal
```

Unha aplicación pode estar escrita de múltiples xeitos, seguindo diferentes orientacións, arquitecturas e estilos, e JSDoc ten que ser capaz de documentar todas elas. Así que JSDoc é amplo e pode resultar denso. Imos aprender as cuestións máis básicas.

## Documentar tipos de datos de variables

Con JSDoc podemos indicar qué tipo de dato agarda atopar nunha variable o noso programa.

A etiqueta `@type` especifica que imos indicar un tipo de datos. O tipo de datos en cuestión vai indicado entre chaves. En principio podemos usar os tipos de datos definidos en JavaScript dentro dos comentarios de JSDoc.

```js
/** @type {String} */
let procedemento
```

No caso de que nunha variable podamos atopar diferentes tipos de datos, podemos indicalo deste xeito.

```js
/** @type {(Number|undefined)} */
let numeroDeVeces
```

## Documentar funcións

Cando definimos funcións, os seus argumentos non son máis que variables locais para a función. Do mesmo xeito que podemos documentar qué tipo de dato se almacena nunha variable, podemos indicar qué tipo de dato agardamos recibir nos parámetros dunha función.

Nas funcións, ademáis podemos documentar qué tipo de dato é o que a función nos entrega como resposta.

```js
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
        numeroDeVeces--
    }
    return true
}
```

## Referencias:
* Referencia rápida: https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html
* Documentar tipado de variables: https://jsdoc.app/tags-type.html
* Crear tipos personalizados: https://jsdoc.app/tags-typedef.html