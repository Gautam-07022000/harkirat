const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/multiply', function (req, res) {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    res.send(`multiply of ${a} ${b} = ${a * b}`)
  })

app.get('/add', function (req, res) {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    res.send(`add of ${a} ${b} = ${a + b}`)
})

app.get('/divide', function (req, res) {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    res.send(`divide of ${a} ${b} = ${a / b}`)
})

app.get('/subtract', function (req, res) {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    res.send(`subtract of ${a} ${b} = ${a - b}`)
    })
    
app.get('/addDyn/:a/:b', function (req, res) {
        const a = parseFloat(req.params.a);
        const b = parseFloat(req.params.b);
        res.send(`add of ${a} ${b} = ${a + b}`)
        })
    


app.listen(3000)


