const express = require('express')
const cors = require('cors')

//Constants
const PORT = '5050'

//Express instance
const app = express()

//Plugins
app.use(express.json())
app.use(cors())

app.get('*', (req, res)=>{
    res.send('GROUP-EATS')
})

//Listener
app.listen(PORT, ()=>{
    console.log(`Listening at http://localhost:${PORT}`)
})


module.exports = app