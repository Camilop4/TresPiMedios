const { Router } = require('express');
const { Producto } = require("../db");


const router = Router();


router.post("/addProducts", async (req, res) => {
    console.log('estoy en la ruta bulk de crear'); // Crea un nuevo producto. Solo permitido para usuarios con el rol "gerente"
    try {
        const data = req.body;
        const newProducto = Producto.bulkCreate(data);
        res.status(201).send(newProducto);
    } catch (error) {
        res.status(400).send( {error: error.message });
    }
    
});


router.get( "/products", async (req, res) => {
    console.log('ruta para listar productos'); //Obtiene todos los productos. Permitido para usuarios con el rol "empleado" o "gerente".
    try {
        const productos = await Producto.findAll();
        res.status(200).send({productos});
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

/*router.get( "/products/:id", async (req, res) => {
    console.log('ruta de productos'); //Obtiene un producto específico por su ID. Permitido para usuarios con el rol "empleado" o "gerente"
    try {
        const id = req.params.id;
        const productId = id.trim();
        const product = await Producto.findByPk(productId);
        if(!product) {
            res.status(404).send("Nose se encontro el producto");
        }else {
            res.status(200).send(product);
        }
    } catch (error) {
        resizeTo.status(500).send({ error: error.menssage });
    }
});

router.put( "/products/:id", isAdmin, async (req, res) => {
    console.log('ruta actualizacion de productos'); //Actualiza un producto específico por su ID. Solo permitido para usuarios con el rol "gerente"
    const id = req.params.id;
    const updateProduct = req.body;
    try {
        const product = await Producto.findByPk(id);
        if(!product) {
            res.status(400).send({ error: error.menssage });
        }
        await product.update(updateProduct);
        res.status(200).send(product);
    } catch (error) {
        res.status(404).send({ error: error.message });
    }
});

router.delete( "/products/:id", isAdmin, async (req, res) => {
    console.log('ruta para eliminar productos'); //Elimina un producto específico por su ID. Solo permitido para usuarios con el rol "gerente"
    const productId = req.params.id;
    try {
        const product = await Producto.findByPk(productId);
        //Validamos si el producto exite y lo eliminamos
        if(product) {
            await product.destroy();
            res.status(200).send("Producto eliminado con exito");
        }else {
            res.status(404).send("Producto no encontrado");
        }
    } catch (error) {
        res.status(500).send( {error: error.menssage} );
    }
});

router.get("/", (req, res) => {
    res.send("Hello!!!!");
})*/

module.exports = router;

