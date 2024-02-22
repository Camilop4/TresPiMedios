const { Router } = require('express');
const { Sale } = require("../db");

const router = Router();

router.post("/addSale", async (req, res) => {
    console.log('ruta de creacion de venta'); // Crea una nueva venta. Solo permitido para usuarios con el rol "empleado".
    try {
        const data = req.body;
        const newSale = Sale.bulkCreate(data);
        res.status(201).send(newSale, "Venta creada con exito");
    } catch (error) {
        res.status(400).send( {error: error.message });
    }
    
});

router.put( "/sale/:id", async (req, res) => {
    console.log('ruta de actualizacion de venta por id'); //AActualiza una venta específica por su ID. Solo permitido para usuarios con el rol "empleado".
    const id = req.params.id;
    const updateSale = req.body;
    try {
        const user = await Sale.findByPk(id);
        if(!user) {
            res.status(400).send({ error: error.menssage });
        }
        await user.update(updateSale);
        res.status(200).send("Se actualizo la venta con exito", user);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

router.delete( "/sale/:id", async (req, res) => {
    console.log('ruta para eliminar una venta'); //Elimina una venta específica por su ID. Solo permitido para usuarios con el rol "empleado".
    const saleId = req.params.id;
    try {
        const sale = await Sale.findByPk(saleId);
        if(user) {
            await sale.destroy();
            res.status(200).send("Venta eliminada con exito");
        }else {
            res.status(404).send("Venta no encontrada");
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.get( "/sale", async (req, res) => {
    console.log('ruta que muestra todas las ventas'); //Obtiene todas las ventas. Permitido para usuarios con el rol "empleado" o "gerente"..
    try {
        const sales = await Sale.findAll();
        res.status(200).send({sales});
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});


router.get( "/sale/:id", async (req, res) => {
    console.log('ruta para buscar una venta por id'); //Obtiene una venta específica por su ID. Permitido para usuarios con el rol "empleado" o "gerente".
    try {
        const id = req.params.id;
        const saleId = id.trim();
        const sale = await Sale.findByPk(saleId);
        if(!sale) {
            res.status(404).send("No se hay una venta registrada con este id");
        }else {
            res.status(200).send({sale});
        }
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});


module.exports = router;