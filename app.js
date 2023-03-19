const express = require('express')
const app = express()

require('dotenv').config()
require('express-async-errors')
const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

//middleware
app.use(express.json())


app.get('/', (req, res) => {
    res.send(`
        <h1>Sore API</h1>
        <a href="/api/v1/products">Products</a>
    `)
})

app.use('/api/v1/products', productsRouter)

//products route



app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log('Server is running on port ' + port)
        })
    } catch (error) {
        console.log(error)
    }
}

start()