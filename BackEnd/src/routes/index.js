const { Router } = require('express');

// Importo todos los routers

const router = Router();
//Products
const getProducts = require('./Producto');
const postBulkProducts = require('./Producto');

//Users
const getUsers = require('./User');
const postUsers = require('./User');



// Configuro los routers

router.use('/', getProducts);
router.use('/addProducts', postBulkProducts);

router.use('/', getUsers);
router.use('/addUser', postUsers);


module.exports = router;

