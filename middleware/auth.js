const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const configuration = require('../config');
dotenv.config();

const authMiddleWare = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    console.log('token', token);
    console.log('authorization', req.headers.authorization);
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, configuration.authSecret);
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = authMiddleWare;
