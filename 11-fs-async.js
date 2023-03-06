// nämner i videon att det hade vart bättre å använda promises eller async ( ska gå igenom senare )

const {readFile, writeFile} = require('fs') // modelname is FS 
console.log('START')


readFile('./content/first.txt','utf8', (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt','utf8',(err, result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/result-async.text', 
        `Here is the result :  ${first}, ${second}`
        ,(err, result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('DONE with this task ')
        })
    })
})
console.log('STARTING new task ')

