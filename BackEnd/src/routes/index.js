const { Router } = require('express');

// Importo todos los routers

const router = Router();
//Products
const getProducts = require('./Producto');
const postBulkProducts = require('./Producto');

//Users
const postUsers = require('./User');
const getUsers = require('./User');
const deleteUser = require('./User');
const searchUser = require('./User');
const updateUser = require('./User');

//Role
const addRole = require('./Role');
const updateRole = require('./Role'); 

//Sale
const addSale = require('./Sale');
const updateSale = require('./Sale');
const deleteSale = require('./Sale');
const listSale = require('./Sale');
const searchSale = require('./Sale');

const dailyClosure = require('./DailyClose');


// Configuro los routers

//Products
router.use('/', getProducts);
router.use('/addProducts', postBulkProducts);

//User
router.use('/', getUsers);
router.use('/addUser', postUsers);
router.use('/user/:id', deleteUser);
router.use('/user/:id', searchUser);
router.use('/user/:id', updateUser);

//Role
router.use('/', addRole);
router.use('/updateRole/:id', updateRole);

//Sale
router.use('/', listSale);
router.use('/addSale', addSale);
router.use('/sale/:id', updateSale);
router.use('/sale/:id', deleteSale);
router.use('/sale/:id', searchSale);

router.use('/', dailyClosure);


module.exports = router;

