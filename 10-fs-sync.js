// FS MODULE

// READS LINE BY LINE 
//Med detta så kommer node inte kunna hantera flera users

// unsyncronic, non-blocking, synchronisly ( for no think of the as different methods )

const {readFileSync, writeFileSync} = require('fs') // modelname is FS 
console.log('START')


const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

//console.log(first,second) // Skriver ut vad som står i txt-filen


writeFileSync('./content/result-sync.txt',`Here is the result :  ${first}, ${second}`)
console.log('DONE with this task ')
console.log('STARTING the next one  ')