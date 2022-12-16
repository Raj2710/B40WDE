const http = require('http')
const fs = require('fs')

// const server = http.createServer((req,res)=>{
//     fs.writeFile('./sample.txt',"I am writing the file using async",(err)=>{
//         console.log(err)
//     })
//     fs.readFile('./sample.txt',(error,data)=>{
//         if(error)
//             console.log(error)
//         res.writeHead(200,{'Content-Type':'text/html'})
//         res.end(data)
//     })
   
// })

const server = http.createServer((req,res)=>{

    let date = new Date()
    fs.writeFileSync(`${date}.txt`,`${date}`,'utf-8')
    let data = fs.readFileSync(`${date}.txt`,'utf-8') 
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end(data)
})

server.listen(8000,()=>console.log('Server is listening 8000'))