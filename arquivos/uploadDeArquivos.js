const fs = require('fs')

fs.readFile('./assets/cachorro.jpg', (erro, buffer)=> {

    console.log('imagem foi bufferizada')
    
    fs.watchFile('./assets/cachorro2.jpg', buffer, (erro) =>{
        console.log('imagem foi escrita')

    })
})