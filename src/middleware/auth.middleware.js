const express = require('express');
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Obtener el token de la solicitud HTTP
  const token = req.headers['authorization'].split('Bearer ')[1];

  // Verificar el token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    // El token es inválido
    res.status(401).json({ message: 'Unauthorized' });
  }
};

//module.exports = authMiddleware;