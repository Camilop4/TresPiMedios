const {Router} = require('express');
const { Producto, User } = require('../db');
const data = require('../assets/data');

const router = Router();

router.get('/', async (req, res) => {
  await User.sync({ force: true });
  await Producto.sync({ force: true });
  const createdUsers = await User.bulkCreate(data.user);
  const createdProducts = await Producto.bulkCreate(data.products);
  res.send({ createdUsers, createdProducts });
});

module.exports = router;