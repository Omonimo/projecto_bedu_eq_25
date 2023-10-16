const Joi = require("joi");

const jwtValidationSchema = Joi.object({
  jwt: Joi.string().required(),
});

function validarTokenJWT(data) {
  const resultadoValidacion = jwtValidationSchema.validate(data);
  if (resultadoValidacion.error) {
    return {
      error: resultadoValidacion.error.details.map((detail) => detail.message),
    };
  }
  return { value: resultadoValidacion.value };
}

module.exports = {
  validarTokenJWT,
};
