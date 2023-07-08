const {HttpError} = require("../helpers");

const validateEmailBody = (req, res, next) => {
    const {email} = req.body;
    if(!email) {
        next(HttpError(400, "missing required field email"))
    }
    next();
}

module.exports = validateEmailBody;