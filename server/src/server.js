const express = require('express')
const cors = require('cors')

//Import routes
const userRoute = require('./routes/user')
const personalInfoRoute = require('./routes/personalInformation')
const restaurantRoute = require('./routes/restaurant')
const authenticationRoute = require('./routes/authentication')

//Constants
const PORT = '5050'

//Express instance
const app = express()

//Apply Plugins
app.use(express.json())
app.use(cors())

//Add routes
app.use('/api/user', userRoute)
app.use('/api/personal-info', personalInfoRoute)
app.use('/api/restaurant', restaurantRoute)
app.use('/api/auth', authenticationRoute)

app.get('/', (req, res)=>{
    res.send('Server is healthy')
})

app.get('/api', (req, res)=>{
    res.send('Server is healthy')
})

//Listener
app.listen(PORT, ()=>{
    console.log(`Listening at http://localhost:${PORT}`)
})

module.exports = app