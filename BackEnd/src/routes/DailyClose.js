const { Router } = require('express');
const { Sale } = require("../db");
//const { isAdmin } = require('../middlewares/auth');

const router = Router();

router.get('/dailyClosure/:date', async (req, res) => {
  console.log('Ruta que muestra un cierre diario dependiendo la fecha');
  try {
    const date_at = req.params.date
    const sales = await Sale.findAll({
      where: {
        sale_at: date_at
      }
    });
    if(!sales || sales.length === 0) {
      res.status(404).send("No se encontro ninguna venta con la fecha ingresada");
    } else {
      let totalSales = 0;
      const salesWithTotal = sales.map(sale => {
        const saleData = sale.dataValues; // get the data values of the sale
        const totalSale = saleData.price * saleData.qty;
        totalSales += totalSale;
        return {...saleData, totaSale: totalSale};
      });
      res.status(200).send({sales: salesWithTotal, totalSales: totalSales}); 
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
})
//Para obtner un cierre diario hay que sumar las ventas que se hicieron en una fecha especifica, entonces hay que primero selecionar la fecha y de acuerdo a esa fecha traer todas las ventas que correspondan y hacer la sumatoria de todas y mostrar en un json la fecha el valor de la venta y el total de ventas
module.exports = router;