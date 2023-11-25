module.exports = {
  // Configuración de la base de datos
  DB_HOST: process.env.DB_HOST || "mongodb://127.0.0.1:27017/",
  //DB_PORT: process.env.DB_PORT || 3306,
  DB_DATABASE: process.env.DB_DATABASE || "tasks",
  //DB_USERNAME: process.env.DB_USERNAME || "",
  //DB_PASSWORD: process.env.DB_PASSWORD || "",

  // Configuración del servidor
  PORT: process.env.PORT || 5000,

  // Configuración de seguridad
  JWT_SECRET: process.env.JWT_SECRET || "my_secret_key",
  TOKEN_EXPIRATION: process.env.TOKEN_EXPIRATION || "24h",
};
