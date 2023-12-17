import express from 'express'

// create a server
const app = express()


app.get('/', (req, res) => {
    res.send('<h1> Hello Governor</h1>')
})



// listen to some port
app.listen(8000, () => {
    console.log("listening")
})