const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody, isValidId, isValidFavorite } = require("../../middlewares");

const {schemas} = require("../../models/contact");

const router = express.Router();

router.get("/", ctrl.listContacts);

router.get("/:id", isValidId, ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

router.delete("/:id", isValidId, ctrl.removeContact);

router.put("/:id", isValidId, validateBody(schemas.addSchema), ctrl.updateContact);

router.patch("/:id/favorite", isValidId, isValidFavorite(schemas.updateFavoriteSchema), ctrl.updateFavorite);

module.exports = router;
