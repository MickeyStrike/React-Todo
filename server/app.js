const express = require('express')
const app = express()
const PORT = 5000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/get',(req,res) => {
  res.status(200).json({ data: 'OKE' })
})

app.listen(PORT,() => {
  console.log(`server oke ${PORT}`)
})