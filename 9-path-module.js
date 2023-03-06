const path = require('path')

console.log(path.sep)


const filePath = path.join('/content','subfolder', 'test.txt');

console.log(filePath)

// // answer : 
// \content\subfolder\test.txt
// PS C:\Users\marcu\OneDrive\Skrivbord\Front End Developing\Skolan\BackEnd\Free Code Camper\Node JS Express> 


const base = path.basename(filePath)

console.log(base)

// the base is : test.txt

const absolut  = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')

console.log(absolut)