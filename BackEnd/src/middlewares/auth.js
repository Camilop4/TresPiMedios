const { User } = require('../db');

const jwt = require('jsonwebtoken');

const payload = { id: 1, role: 'admin' };
const secret = 'mysecretkey';
const token = jwt.sign(payload, secret, { expiresIn: '1h' });

//console.log('Token:', token);


const isAdmin = async (req, res, next) => {
  const authorization = req.headers['authorization'];
  if (authorization) {
    const token = authorization.slice(7); // Eliminar 'Bearer ' del token
    try {
      const decoded = jwt.verify(token, secret);
      if (decoded && decoded.role === 'admin') {
        next();
      } else {
        res.status(403).send({ message: 'Forbidden' });
      }
    } catch (error) {
      res.status(401).send({ message: 'Invalid Token' });
    }
  } else {
    res.status(401).send({ message: 'Unauthorized' });
  }
};

module.exports = { isAdmin };

