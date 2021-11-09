const express = require ("express")
const app = express()
const port = 8080
app.use (express.json())

//Configuracion de WebSockets
const http= require("http")
const server = http.createServer(app)
const io = require ("socket.io")(server)

io.on("connection", (Socket) => {
    
})


//Configuracion de Handlebars
const handlebars = require ("express-handlebars");
app.set ("views","./views")
app.set ("view engine", "hbs")
let productsList = require(__dirname + "/Routes/Products/productsList.js")
    //Plantilla
app.engine (
    "hbs",
    handlebars({
        extname: ".hbs",
        layoutsDir: __dirname + "/views/layouts",
        defaultLayout:"index",
        partialsDir: __dirname + "/views/partials",
    })
)
app.get("/", (req, res)  => {
    res.render("main")
})
app.get("/productos", (req, res)  => {
    if(productsList.length > 0 ){
    res.render("productos" , {layout: "home" , data: productsList})
    }
    else{
        res.send( " No hay Productos")
    }
})

//Form
app.get("/form", (req, res)  => {
    res.render("form", {layout: "addProducts"})
})
//Statics
app.use (express.static("public"))
app.use("/static", express.static(__dirname + "/public"));
app.use(express.urlencoded({extended:false}));

//Port
app.listen (8080, () => {
    console.log( "Server on port " + port)
})



//Api products
const productsRoutes = require ("./Routes/Products/products")
const { Socket } = require("socket.io")

app.use ("/api", productsRoutes)


