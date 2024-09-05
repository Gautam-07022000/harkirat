
const express = require('express')
const app = express()

let reqCount = 0;

app.get('/', function (req, res) {
  res.send('Hello World')
})

function requestInreaser(req, res, next){
    reqCount += 1;
    console.log(`New Req Count = ${reqCount}`)
    res.send('Hello World')         // Using this ends the request here only
    // next();                      // Calling this calls the next function in this case it's realSumHandler
}

function realSumHandler(req, res){
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    res.send(`sum of ${a} ${b} = ${a + b}`)
}

app.get('/sum', requestInreaser, realSumHandler)

app.listen(3000)
