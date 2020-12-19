(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{367:function(a,s,e){"use strict";e.r(s);var t=e(42),n=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"defincion-de-clases-y-creacion-de-objetos-en-php"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#defincion-de-clases-y-creacion-de-objetos-en-php"}},[a._v("#")]),a._v(" Definción de Clases y Creación de Objetos en PHP")]),a._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#clases-en-php"}},[a._v("Clases en PHP")]),e("ul",[e("li",[e("a",{attrs:{href:"#ejemplo-de-defincion-de-la-clase-producto"}},[a._v("Ejemplo de definción de la Clase Producto")])])])]),e("li",[e("a",{attrs:{href:"#los-objetos-las-instancias-de-la-clase"}},[a._v("Los objetos. Las instancias de la clase.")])]),e("li",[e("a",{attrs:{href:"#actividades-propuestas"}},[a._v("Actividades Propuestas")])])])]),e("p"),a._v(" "),e("h2",{attrs:{id:"clases-en-php"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clases-en-php"}},[a._v("#")]),a._v(" Clases en PHP")]),a._v(" "),e("p",[a._v("La definición básica de una clase comienza con la palabra reservada "),e("code",[a._v("class")]),a._v(", seguida de un nombre de clase, y continuando con un par de llaves que encierran las definiciones de las propiedades y métodos pertenecientes a dicha clase.")]),a._v(" "),e("blockquote",[e("p",[a._v("Por convención  se suele utilizar UpperCamelCase (más conocido como PascalCase), cuando la primera letra de cada una de las palabras es mayúscula")])]),a._v(" "),e("p",[a._v('Una clase puede tener sus propias constantes, variables (llamadas "propiedades"), y funciones (llamados "métodos").')]),a._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token php language-php"}},[e("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("<?php")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ClaseSencilla")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Declaración de una propiedad")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$var")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'un valor predeterminado'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Declaración de un método")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("mostrarVar")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("?>")])]),a._v("\n")])])]),e("p",[a._v("La "),e("strong",[a._v("pseudovariable")]),a._v(" "),e("code",[a._v("$this")]),a._v(" está disponible cuando un método es invocado dentro del contexto de un objeto. "),e("code",[a._v("$this")]),a._v(" es una referencia al objeto invocador (usualmente el objeto al cual el método pertenece")]),a._v(" "),e("p",[e("code",[a._v("->")]),a._v(" es el utilizado para referirse a un método o propiedad dentro de un objeto")]),a._v(" "),e("p",[a._v("Si el acceso es a una propiedad se omite el signo $ en el acceso a la misma")]),a._v(" "),e("h3",{attrs:{id:"ejemplo-de-defincion-de-la-clase-producto"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ejemplo-de-defincion-de-la-clase-producto"}},[a._v("#")]),a._v(" Ejemplo de definción de la Clase Producto")]),a._v(" "),e("p",[a._v("Vamos a definir una clase con las siguientes propiedades y métodos:")]),a._v(" "),e("ul",[e("li",[a._v("clase : Producto")]),a._v(" "),e("li",[a._v("atributos : nombre, descripción , precio, cantidad")]),a._v(" "),e("li",[a._v("metodos : obtener nombre, cambiar nombre")])]),a._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token php language-php"}},[e("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("<?php")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Producto")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Proiedades")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$nombre")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$descripcion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$precio")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$stock")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n \n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Métodos")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("set_nombre")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$_nombre")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),e("span",{pre:!0,attrs:{class:"token property"}},[a._v("nombre")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$_nombre")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n       "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//La palabra this dentro de la clase hace referencia a sí misma")]),a._v("\n   "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// El signo flecha -> relaciona la clase con una propiedad o un método ")]),a._v("\n   "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// $_nombre es un parámetro que coge el nuevo valor, no tiene que ver en principio nada con el nombre de la propiedad por eso el guión bajo.")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("get_nombre")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),e("span",{pre:!0,attrs:{class:"token property"}},[a._v("nombre")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n \n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n\n\n")])])])]),e("h2",{attrs:{id:"los-objetos-las-instancias-de-la-clase"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#los-objetos-las-instancias-de-la-clase"}},[a._v("#")]),a._v(" Los objetos. Las instancias de la clase.")]),a._v(" "),e("p",[a._v("Para crear un objeto, éste se  instancia de una clase. Se debe crear una variable y asignarla a   la palabra reservada "),e("code",[a._v("new")]),a._v(" seguido del nombre de la clase y doble paréntesis.")]),a._v(" "),e("p",[a._v("Las clases deberán ser definidas antes de su instanciación.")]),a._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token php language-php"}},[e("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("<?php")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$instancia")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ClaseSencilla")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n")])])])]),e("p",[a._v("Podemos crear todos los  objetos que deseemos a partir de una clase. Cada objeto tiene todas las propiedades y métodos definidos en la clase, pero las propiedades podrían diferentes valores .")]),a._v(" "),e("p",[a._v("En el siguiente ejemplo $platoDeGambas es una instancia  de la clase Producto:")]),a._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$platoDeGambas")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Producto")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("p",[a._v("Una vez instanciada podemos asignar valores a sus propiedades o ejecutar sus métodos. Un objeto hereda todas las propiedades y métodos de su clase.")]),a._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$platoDeGambas")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("set_nombre")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'Plato de Gambas'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$platoDeGambas")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),e("span",{pre:!0,attrs:{class:"token property"}},[a._v("stock")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("7")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$platoDeGambas")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),e("span",{pre:!0,attrs:{class:"token property"}},[a._v("descripcion")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'gambas rojas de Huelva'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$platoDeGambas")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("get_nombre")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("p",[a._v("La clase puede tener propiedades con valores por defecto pero el objeto en sí puede modificarlos...")]),a._v(" "),e("h2",{attrs:{id:"actividades-propuestas"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#actividades-propuestas"}},[a._v("#")]),a._v(" Actividades Propuestas")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("Realiza una definición de algún objeto de tu preferencia, por ejemplo: Un coche. Tengo un Toyota de color rojo, con cuatro puertas el cual puede acelerar y tocar la bocina.")])]),a._v(" "),e("li",[e("p",[a._v("A partir del ejercicio anterior, procede a crear una Clase denominada Coche con las propiedades y los métodos que consideres que estén dentro de tu definición.")])]),a._v(" "),e("li",[e("p",[a._v("Crea una instancia de la clase coche que sea tu toyota Rojo")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);