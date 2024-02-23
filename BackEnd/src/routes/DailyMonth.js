const { Router } = require('express');
const { Sale } = require("../db");
const { Op } = require('sequelize');

const router = Router();

router.get('/monthSales/:year/:month', async (req, res) => {
  console.log('Ruta que muestra todas las ventas de un mes específico');
  try {
    const year = parseInt(req.params.year);
    const month = parseInt(req.params.month);
    const startDate = new Date(year, month - 1, 1); // mes - 1 porque los meses están indexados en 0
    const endDate = new Date(year, month, 0); // El día 0 del mes siguiente dará el último día del mes actual.
    const sales = await Sale.findAll({
      where: {
        sale_at: {
          [Op.between]: [startDate, endDate]
        }
      }
    });
    if(!sales || sales.length === 0) {
      res.status(404).send("No se encontraron ventas para el mes y año proporcionados");
    } else {
      let totalSales = 0;
      const salesWithTotal = sales.map(sale => {
        const saleData = sale.dataValues; // obtiene los valores de datos de la venta
        const totalSale = saleData.price * saleData.qty;
        totalSales += totalSale;
        return {...saleData, totaSale: totalSale}; // devuelve un nuevo objeto con los datos de venta y el total
      });
      res.status(200).send({sales: salesWithTotal, totalSales: totalSales}); 
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
})

module.exports = router;