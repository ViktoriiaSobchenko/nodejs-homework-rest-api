const express = require("express");
const ctrl = require("../../controllers/auth");
const { validateUserBody, authenticate} = require("../../middlewares");
const {schemas} = require("../../models/user");

const router = express.Router();

router.post("/register", validateUserBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateUserBody(schemas.loginSchema), ctrl.login);

router.post("/logout", authenticate, ctrl.logout);

router.get("/current", authenticate, ctrl.getCurrent);

router.patch("/", authenticate, validateUserBody(schemas.updateSubscriptionSchema), ctrl.updateSubscription);

module.exports = router;