const { Router } = require('express');
const { User, Role } = require("../db");

const router = Router();

router.post("/addRole", async (req, res) => {
    console.log('ruta de creacion de Role'); //Ruta para Crear un role. Solo permitido para usuarios con el rol "gerente".
    try {
        const data = req.body;
        const newRole = Role.create(data);
        res.status(201).send(newRole);
    } catch (error) {
        res.status(400).send( {error: error.message });
    }
    
});


router.put( "/updateRole/:id", async (req, res) => {
    console.log('ruta de actualizacion de usuarios'); //Actualiza un usuario específico por su ID. Solo permitido para usuarios con el rol "gerente".
    const id = req.params.id;
    const { roleName } = req.body; // Asume que el nombre del rol se envía en el cuerpo de la solicitud
    try {
        // Busca el usuario por su ID
        const user = await User.findByPk(id);
        if (!user) {
          return res.status(400).send({ error: "User not found" });
        }
    
        // Busca el rol por su nombre
        const role = await Role.findOne({ where: { name: roleName } });
        if (!role) {
          return res.status(400).send({ error: "Role not found" });
        }
    
        // Asigna el rol al usuario
        user.role_id = role.name;
    
        // Guarda los cambios en la base de datos
        await user.save();
        res.status(200).send(user);
      } catch (error) {
        res.status(400).send({ error: error.message });
    }
});



module.exports = router;