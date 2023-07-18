const express = require("express");
const ctrl = require("../../controllers/auth");
const { validateUserBody, validateEmailBody, authenticate, upload} = require("../../middlewares");
const {schemas} = require("../../models/user");

const router = express.Router();

router.post("/register", validateUserBody(schemas.registerSchema), ctrl.register);

router.get("/verify/:verificationToken", ctrl.verifyEmail);

router.post("/verify", validateEmailBody, validateUserBody(schemas.emailSchema), ctrl.resendVerifyEmail);

router.post("/login", validateUserBody(schemas.loginSchema), ctrl.login);

router.post("/logout", authenticate, ctrl.logout);

router.get("/current", authenticate, ctrl.getCurrent);

router.patch("/", authenticate, validateUserBody(schemas.updateSubscriptionSchema), ctrl.updateSubscription);

router.patch("/avatars", authenticate, upload.single("avatar"), ctrl.updateAvatar);

module.exports = router;