const connectDB = require('./db/connectionDB')

const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
require('dotenv').config()

//middleware
app.use(express.json())

//routes
app.get('/', (req, res) => {
    res.send('Task Manager App')
})


app.use('/api/v1/tasks', tasks)

const port = 3000;

const start = async() => {
    try {
        await connectDB(process.env.MONGOURI)
        app.listen(port, console.log('Server is listening on port ' + port + '...'));
    }
    catch (err){
        console.log('Error connecting')
    }
}

start()