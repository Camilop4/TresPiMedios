const { Router } = require('express');
const { hasRole } = require('../middlewares/auth');

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
const dailyMonth = require('./DailyMonth');
const bdRouter = require('../middlewares/bdRoute');


// Configuro los routers

//iniciar BD con json de productos
router.use('/', bdRouter);


//Role
router.use('/', hasRole('Manager'), addRole);
router.use('/updateRole/:id', hasRole('Manager'), updateRole);

//User
router.use('/', hasRole('Manager'), getUsers);
router.use('/addUser',  hasRole('Manager'), postUsers);
router.use('/user/:id', hasRole('Manager'), deleteUser);
router.use('/user/:id', hasRole('Manager'), searchUser);
router.use('/user/:id', hasRole('Manager'), updateUser);

//Products
router.use('/', hasRole('Manager'), getProducts);
router.use('/addProducts', postBulkProducts);

//Sale
router.use('/', listSale);
router.use('/addSale', addSale);
router.use('/sale/:id', hasRole('Manager'), updateSale);
router.use('/sale/:id', hasRole('Manager'), deleteSale);
router.use('/sale/:id', searchSale);

router.use('/', hasRole('Manager'), dailyClosure);

router.use('/', hasRole('Manager'), dailyMonth);


module.exports = router;

