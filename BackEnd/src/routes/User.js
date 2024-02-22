const { Router } = require('express');
const { User } = require("../db");

const router = Router();

router.post("/addUser", async (req, res) => {
    console.log('ruta de creacion de usuarios'); //Obtiene todos los usuarios. Solo permitido para usuarios con el rol "gerente".
    try {
        const data = req.body;
        const newUsers = User.bulkCreate(data);
        res.status(201).send(newUsers);
    } catch (error) {
        res.status(400).send( {error: error.message });
    }
    
});

router.get( "/user", async (req, res) => {
    console.log('ruta que muestra lista usuarios'); //Crea un nuevo usuario. Solo permitido para usuarios con el rol "gerente".
    try {
        const users = await User.findAll();
        res.status(200).send({users});
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

router.delete( "/user/:id", async (req, res) => {
    console.log('ruta para eliminar usarios'); //Elimina un usuario específico por su ID. Solo permitido para usuarios con el rol "gerente"
    const userId = req.params.id;
    try {
        const user = await User.findByPk(userId);
        if(user) {
            await user.destroy();
            res.status(200).send("Producto eliminado con exito");
        }else {
            res.status(404).send("Producto no encontrado");
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.get( "/user/:id", async (req, res) => {
    console.log('ruta para buscar un usario por id'); //Obtiene un usuario específico por su ID. Solo permitido para usuarios con el rol "gerente".
    try {
        const id = req.params.id;
        const userId = id.trim();
        const users = await User.findByPk(userId);
        if(!users) {
            res.status(404).send("No se encontro ususario");
        }else {
            res.status(200).send({users});
        }
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

router.put( "/user/:id", async (req, res) => {
    console.log('ruta de actualizacion de usuarios'); //Actualiza un usuario específico por su ID. Solo permitido para usuarios con el rol "gerente".
    const id = req.params.id;
    const updateUser = req.body;
    try {
        const user = await User.findByPk(id);
        if(!user) {
            res.status(400).send({ error: error.menssage });
        }
        await user.update(updateUser);
        res.status(200).send("Se actualizo Usuario con Exito", user);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});



module.exports = router;