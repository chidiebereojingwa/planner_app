import mongoose from 'mongoose'

mongoose.set("strictQuery", true);

mongoose.connect("mongodb://localhost:27017/my-planner").then(
    () => {
        console.log("Connected to DB!")
    }).catch((err) => {
        console.log('Error in connection', err)
    })

// create a server
const app = express()


app.get('/', (req, res) => {
    res.send('<h1> Hello Governor,  you are the main guy</h1>')
})



// listen to some port
app.listen(8000, () => {
    console.log("listening")
})