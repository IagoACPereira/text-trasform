# text-trasform
O text-transform é um módulo que foi desenvolvido por conta de o JavaScript não possuir métodos nativos para capitalizar um texto apenas para deixar a string inteiramente maiúscula ou minúscula.
Contudo, o projeto também tem os métodos de upperCase e lowerCase para o módulo ficar completo.

Até o presente momento contém quatro métodos:
|Método|Objetivo|Entrada|Saída|
|-|-|-|-|
|upperCase()|Deixar todos os caracteres maiúsculos|minha string|MINHA STRING|
|lowerCase()|Deixar todos os caracteres minúsculos|MINHA STRING|minha String|
|capitalize()|Deixar a primeira letra da string maiúscula|minha string|Minha string|
|capitalizeAll()|Deixar a primeira letra de cada palavra da string maiúscula|minha string|Minha String|
***
## Exemplos
### upperCase
```js
const textTransform = require('./')

console.log(textTransform.upperCase('minha string'));
```
```bash
user@my-user:~$ node index.js 
MINHA STRING
```
### lowerCase
```js
const textTransform = require('./')

console.log(textTransform.lowerCase('MINHA STRING'));
```
```bash
user@my-user:~$ node index.js
minha string
```
### capitalize
```js
const textTransform = require('./')

console.log(textTransform.capitalize('minha string'));
```
```bash
user@my-user:~$ node index.js
Minha string
```
### capitalizeAll
```js
const textTransform = require('./')

console.log(textTransform.capitalizeAll('minha string'));
```
```bash
user@my-user:~$ node index.js
Minha String
```
