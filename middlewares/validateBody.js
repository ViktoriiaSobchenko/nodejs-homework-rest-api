const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { favorite } = req.body;
      if (favorite === undefined) {next(HttpError(400, "missing field favorite"))}
    if (Object.keys(req.body).length === 0) {
      next(HttpError(400, "missing fields"));
  }

  const { error } = schema.validate(req.body);
  
  if (error) {
    const [errorDatails] =  error.details; 
    next(HttpError(400, `missing required ${errorDatails.context.label} field`));
    }
    next();
  };
  return func;
};

module.exports = validateBody;
