const express = require('express')
const mysql = require('mysql')

const app = express()
const port = 3000
const connection = mysql.createConnection({
    host: "db",
    port: 3306,
    database: "nodedb",
    user: "root",
    password: "root"
})

const sql = `Insert into people(name) values('Nunes')`
app.get('/', async (req,res) => {
    connection.query("Select * from people", function (error, results, fields) {
        console.log(results)
        if(error) {
            return res.status(500).send("Tente novamente mais tarde")
        }
        return res.send(`<h1>Full Cycle Rocks!</h1> <br> <span>${results[0].name}</span>`)
    })
})

app.listen(port, () => {
    console.log(`server running port ${port}`)
})