const { Router } = require('express');
const { Sale } = require("../db");
const { isAdmin } = require('../middlewares/auth');

const router = Router();

router.post('/daily-closure', isAuth, isAdmin, async (req, res) => {
    try {
      // Obtén todas las ventas del día actual
      const sales = await Sale.findAll({
        where: {
          sale_at: {
            [Op.gte]: sequelize.literal('CURRENT_DATE')
          }
        },
        include: Product // Incluye el modelo de Producto para acceder a los precios
      });
  
      // Calcula el total de las ventas
      const totalSales = sales.reduce((total, sale) => total + sale.Product.price, 0);
  
      // Envía la respuesta
      res.json({
        message: 'Cierre diario realizado con éxito',
        totalSales: totalSales,
      });
    } catch (error) {
      res.status(500).json({ message: 'Hubo un error al realizar el cierre diario', error: error.message });
    }
});

//Para obtner un cierre diario hay que sumar las ventas que se hicieron en una fecha especifica, entonces hay que primero selecionar la fecha y de acuerdo a esa fecha traer todas las ventas que correspondan y hacer la sumatoria de todas y mostrar en un json la fecha el valor de la venta y el total de ventas
module.exports = router;