# CL-Encoder

  

CL-Encoder es una librería open source con la que se pueden cifrar y descifrar cadenas de texto desde una aplicación con tecnologías basadas en JavaScript.

  
  

## ¿Cómo funciona?

  

Esta librería hace uso de una clave secreta basada en la cual se logra cifrar la cadena en cuestión. Esta clave pasa por un algoritmo que convierte cada caracter de la cadena original y de la clave de cifrado, su equivalente codigo ASCII, posteriormente suma cada valor numérico de la clave, a su correspondiente valor en la cadena a cifrar, y por último convirtiéndolos nuevamente a UTF-8. De esta manera se consigue cifrar la cadena de forma sencilla.

>El proceso para descifrar es el mismo, solo que en lugar de sumar los valores, estos se resta.

  

### Instalación

  

Para instalar la librería, se hace uso del siguiente comando.

> npm install --save cl-encoder

  

### Importación del paquete

  

> import { encodeString, decodeString } from 'cl-encoder';

  

## Ejemplos de uso

  

### Cifrar cadena:

> const cadenaOriginal = 'Este es el texto super secreto que deseo proteger 😉';

> const claveDeCifrado = 'utuieruituierthgdfhdgfhjggt';

>

>// Esta función retorna la cadena ya cifrada.

>const textoCifrado = encodeString(cadenaOriginal, claveDeCifrado);

  

### Descifrar cadena:

> const textoCifrado= 'jksfgI05839m%#mvuijh/($J"hJSKAD#9';

> const claveDeCifrado = 'utuieruituierthgdfhdgfhjggt';

>

>// Esta función retorna la cadena descifrada.

> const cadenaDescifrada = encodeString(textoCifrado, claveDeCifrado);

  

### Repositorio

[https://github.com/DevCriss/cl-encoder](https://github.com/DevCriss/cl-encoder)