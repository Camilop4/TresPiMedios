const { User } = require('../db');

/*const jwt = require('jsonwebtoken');

const payload = { id: 1, role: 'admin' };
const secret = 'mysecretkey';
const token = jwt.sign(payload, secret, { expiresIn: '1h' });

console.log('Token:', token);*/

const hasRole = (role) => async (req, res, next) => {
  const userId = req.headers['auth'];
  const user = await User.findByPk(userId);
  if (user && user.role_id === role) {
    next();
  } else {
    res.status(403).send({ message: 'Forbidden' });
  }
};


module.exports = { hasRole };

