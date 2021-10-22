const express = require ("express")
const app = express()
const port = 8080

app.listen (8080, () => {
    console.log( "Server on port " + port)
})

//Api products
const productsRoutes = require ("./Routes/Products/products")

app.use ("/api", productsRoutes)
app.use (express.json())