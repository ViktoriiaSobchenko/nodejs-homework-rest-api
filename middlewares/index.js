const validateBody = require("./validateBody");
const isValidId = require("./isValidId");
const isValidFavorite = require("./isValidFavorite");
const validateUserBody = require("./validateUserBody");
const validateEmailBody = require("./validateEmailBody");
const authenticate = require("./authenticate");
const upload = require("./upload");

module.exports = { 
    validateBody,
    isValidId,
    isValidFavorite,
    validateUserBody,
    validateEmailBody,
    authenticate,
    upload,
};
