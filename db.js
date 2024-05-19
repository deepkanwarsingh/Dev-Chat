const MongoClient = require('mongodb').MongoClient
const dotenv = require('dotenv')
dotenv.config()

const url = "mongodb+srv://user22:user22@cluster.2bwkdba.mongodb.net/?retryWrites=true&w=majority&appName=Cluster"
MongoClient.connect(url, (err, client)=>{
    if(err) throw err

    console.log("db connected...")
    module.exports = client

    const app = require('./app')
    app.listen(8000, ()=>{
        console.log("server listening on 8000...")
    })
})