const dotenv = require("dotenv")
const express = require('express')
const path = require("path")
const fs = require("fs")
const app = express()
const port = 80



dotenv.config()
const cors = require('cors');
app.use(cors());
app.options('*', cors());




app.use(express.json())
app.use(express.static('client'));


app.get('/', (req, res) => {
   res.status(200)
   res.sendFile(path.join(__dirname, "src", "index.html"))

})

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})




