const express = require ("express")
const {Router} = express;

const router = new Router()

//Lectura de productos del servidor
const fs = require ("fs")
let readFile = fs.readFileSync("./Routes/Products/productsList.txt" , "utf-8", (err, data) => {
    if(err) throw "Error al leer"
    return data
});
let serverProducts = JSON.parse(readFile, null, 2)

//Rutas de productos
    //Obtener todos los productos
router.get("/products", (req, res) => {
    res.send(serverProducts)
})
    //Obtener un producto segun ID
router.get("/products/:id", (req, res) => {
    res.send()
})
    //Agregar producto y asignar ID, luego lo muestra
router.post("/products", (req, res) => {
    res.send()
})
    //Segun su ID, actualiza un producto
router.put("/products/:id", (req, res) => {
    res.send()
})
    //Elimina un producto segun ID
router.delete("/products/:id", (req, res) => {
    res.send()
})
module.exports = router
