const express = require ("express")
const app = express()
const port = process.env.PORT || 8080;

const fs = require ("fs")
let readFile = fs.readFileSync("./products.txt" , "utf-8", (err, data) => {
    if(err) throw "Error al leer"
    //let prodList = JSON.parse(data, null, 2)
    return data
});
let serverProducts = JSON.parse(readFile, null, 2)

function itemRandom(min, max) {
    return serverProducts[Math.floor(Math.random() * (max - min)) + min];
}


app.listen(8080, () => {
    console.log( "Server run on port 8080")
})
//RUTA Bienvenida
app.get("/" , (req, res) => {
    res.send("Bienvenido: /products para obtener todos los productos y /productRandom para obtener un producto al azar")
})

//RUTA productos, devuelve un array con todos los productos disponibles en sv.

app.get("/products" , (req, res) => {
   res.send(serverProducts)
})
//RUTA prodRandom, devuelve un producto al azar entre todos los disponibles.

app.get("/productRandom" , (req, res) => {
    res.send(itemRandom(0, serverProducts.length));
})