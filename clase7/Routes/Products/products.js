const { application } = require("express");
const express = require ("express")

const {Router} = express;
const router = new Router()

let productsList = require( "./productsList.js")

//Rutas de productos
    //Obtener todos los productos
router.get("/productsList", (req, res) => {
    res.send({data : productsList})
})
router.get("/", (req, res)  => {
    res.send("Bienvenido a la api")
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
        tittle: req.body.formTittle,
        price: req.body.formPrice,
        id : productsList.length+1,
        img: req.body.formImgLink
    }
    productsList.push(obj);
    res.render("main")
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



module.exports = router
