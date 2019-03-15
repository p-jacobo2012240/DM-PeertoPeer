const express = require('express')
const app = express()
const skIO = require('socket.io')
const http = require('http')

let server = http.createServer(app)

process.env.PORT = process.env.PORT || 3000

app.use( express.static( __dirname + '/public'))

app.get('/', (req, res)=>{

    res.send({ message: 'Peticion Exitosa'})
})

module.exports.io = skIO(server)
require('./socket/logic-server')


server.listen(process.env.PORT, ()=>{
    console.log(`
        Server Online -> ${process.env.PORT}
    `)
})