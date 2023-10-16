const { findByUsername } = require("../services/user");
const jwt = require("jsonwebtoken");
const { validarTokenJWT } = require("./jwt");

exports.login = async function (request, response) {
  const { username, password } = request.body;

  const user = await findByUsername({ username });

  if (!user) {
    return response.status(400).json({
      message: "Usuario o contraseña inválidos",
      messagedev: "No se encontró el usuario en la base de datos",
      code: "ERR_AUTH",
    });
  }

  if (user.password !== password) {
    return response.status(400).json({
      message: "Usuario o contraseña inválidos",
      messagedev: "Contraseña incorrecta",
      code: "ERR_AUTH",
    });
  }

  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET
  );

  const resultadoValidacion = validarTokenJWT({ jwt: token });

  if (resultadoValidacion.error) {
    return response.status(500).json({
      message: "Error interno del servidor",
      messagedev: "Error al generar y validar el token",
      code: "ERR_INTERNAL",
    });
  }

  response.status(200).json({
    jwt: token,
  });
};
