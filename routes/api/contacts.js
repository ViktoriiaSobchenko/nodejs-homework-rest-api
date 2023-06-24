const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody, isValidId, isValidFavorite, authenticate } = require("../../middlewares");

const {schemas} = require("../../models/contact");

const router = express.Router();

router.get("/", authenticate, ctrl.listContacts);

router.get("/:id", authenticate, isValidId, ctrl.getById);

router.post("/", authenticate, validateBody(schemas.addSchema), ctrl.addContact);

router.delete("/:id", authenticate, isValidId, ctrl.removeContact);

router.put("/:id", isValidId, authenticate, validateBody(schemas.addSchema), ctrl.updateContact);

router.patch("/:id/favorite", authenticate, isValidId, isValidFavorite(schemas.updateFavoriteSchema), ctrl.updateFavorite);

module.exports = router;
