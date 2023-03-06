
// Common JS, every file is Module (by default)
//Modules - Encapsulated code ( Only Share minimum ) // Gör kode tillgänlig i 


const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-export')
require('./7-mind-grenade') // om man har aktiverat funktionen i en annan modul behöver den inte ges en variabel



sayHi('Marcus') // local 
//sayHi(john)
//sayHi(peter)

//Correct below 
sayHi(names.john)
sayHi(names.peter)