const express = require ("express")
const app = express()
const port = 8080
app.use (express.json())

//Statics
app.use (express.static("public"))
app.use("/static", express.static(__dirname + "/public"));
app.use(express.urlencoded({extended:false}));

//Port
app.listen (8080, () => {
    console.log( "Server on port " + port)
})

app.get("/", (req, res)  => {
    res.send("Bienvenido")
})

//Form
app.get("/form", (req, res)  => {
    res.sendFile( __dirname +"/public/form.html")
})


//Api products
const productsRoutes = require ("./Routes/Products/products")

app.use ("/api", productsRoutes)


