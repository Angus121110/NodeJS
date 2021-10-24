const { application } = require("express");
const express = require ("express")

const {Router} = express;
const router = new Router()

let productsList = require( "./productsList.js")

//Rutas de productos
    //Obtener todos los productos
router.get("/products", (req, res) => {
    res.send({data : productsList})
})
    //Obtener un producto segun ID
router.get("/products/:id", (req, res) => {
    let index = productsList.findIndex( x=> {
        return x.id == req.params.id
    })
    if( index < 0){
        res.send("Producto no encontrado")
    }else{
        res.send(productsList[index])
    }
})
    //Agregar producto y asignar ID, luego lo muestra
router.post("/addProduct", (req, res) => {
    let obj = {
        tittle: req.body.tittle,
        price: req.body.price,
        id : productsList.length+1
    }
    productsList.push(obj);
    res.send("Producto agregado")
})
    //Segun su ID, actualiza un producto
router.put("/actProduct/:id", (req, res) => {
    let index = productsList.findIndex( x =>   {
        return x.id == req.params.id
    })
    if( index < 0){
        res.send("Producto no encontrado")
    }else{
        productsList[index].tittle = req.body.tittle
        productsList[index].price = req.body.price
    
        res.send("Producto actualizado")
    }
})
    //Elimina un producto segun ID
router.delete("/delProduct/:id", (req, res) => {
    let newArr = productsList.filter( x=> {
        return x.id != req.params.id
    })

    if( index < 0){
        res.send("Producto no encontrado")
    }else{
        productsList= newArr

        res.send("Producto Eliminado")
    }
    
})

        //Agregar mediante formulario
router.post("/addProductForm", (req, res) => {
    let obj = {
        tittle: req.body.tittle,
        price: req.body.price,
        id : productsList.length+1
    }
    productsList.push(obj);
    res.send("Producto agregado con formulario")
})

module.exports = router
