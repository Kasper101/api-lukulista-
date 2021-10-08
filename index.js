const express = require('express')
const PORT = process.env.PORT || 5000

const app = express()

function arvoNumero(alaraja, ylaraja) {
  return Math.floor(ylaraja * math.random())

  
app.get('/', function (req, res)  {
  let NUMEROLISTA = [
  arvoNumero(0,5),
  arvoNumero(10,15),
  arvoNumero(100,500),
  arvoNumero(10,20),
  arvoNumero(0.5)
  res.send(numerolista)]
})

app.listen(PORT)
