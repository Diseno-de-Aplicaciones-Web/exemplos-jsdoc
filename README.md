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
 * @param {String} texto 
 * @param {Number} numeroDeVeces - Ten que ser un número positivo
 * @returns {Boolean}
 * @example imprimirVariasVeces("Sandman", 3)
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

## Tipos de datos personalizados

Se fas POO e defines clases, as clases son os teus tipos de datos personalizados e podes empregalos como tipo en JSDoc. Doutro xeito, podes empregar JSDoc para definir tipos de datos que logo podes usar na documentación.

```js
/**
 * Conta de usuario para o acceso á aplicación
 * @typedef {Object} User
 * @property {String} username - Unique identifier for human use.
 * @property {String} password - Human secret for authentication.
 * @property {Boolean} enabled - Defines if the user account is usable.
 */

/** @type {User} */
const user = User.findOne(id: request.body.id)
```

## Arrays

Podemos definir el tipo de elementos que componen un array.

```js
/** @type {Number[]} */
const turnos = [1, 2, 42]
```
Podemos definir arrays mixtos (suele ser mala idea).

```js
 /**  @type {(Number|String)[]} */
const turnosMezcladosConUsuarios = [42, "42"]
```

## Definir datos estructurados en arrays ou obxetos

Tamén podemos documentar datos que recibimos estructurados como arrays ou obxectos. Isto pode ser moi interesante para documentar compoñentes de React.

```js
/** @type {[String, Number, Boolean]} */
const usuarioTupla = [ nome, idade, casado ]

/** @type {{nome: String, idade: Number, casado: Boolean}} */
const usuarioObxeto = { nome, idade, casado }

/** @params {{idUsuario:Number}} props */
function PerfilUsuario({idUsuario}){
    return(<></>)
}
```

## Referencias:
* Referencia rápida: https://devhints.io/jsdoc
* Otra referencia rápida: https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html
* Documentar tipado de variables: https://jsdoc.app/tags-type.html
* Crear tipos personalizados: https://jsdoc.app/tags-typedef.html
* JSDoc y React: https://www.inkoop.io/blog/a-guide-to-js-docs-for-react-js/