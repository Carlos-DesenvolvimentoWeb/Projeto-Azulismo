const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'Acesso negado. Token não fornecido.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Decodifica o token e anexa o payload ao objeto req
    next(); // Continua para a próxima função middleware/rota
  } catch (error) {
    res.status(400).json({ message: 'Token inválido.' });
  }
};
