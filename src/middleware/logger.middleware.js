const express = require("express");
const logger = require("morgan");

const loggerMiddleware = (req, res, next) => {
  // Obtener el método HTTP de la solicitud
  const method = req.method;

  // Obtener la ruta de la solicitud
  const uri = req.url;

  // Obtener los datos de la solicitud
  const body = req.body;

  // Registrar la solicitud
  logger.info({
    method,
    uri,
    body,
  });

  next();
};

module.exports = loggerMiddleware;
