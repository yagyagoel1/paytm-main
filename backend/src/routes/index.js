const express = require("express");
const router = express.Router();
const userRoutes = require("../domain/user");
const accountRoutes = require("../domain/accounts")
router.use("/user",userRoutes);
router.use("/account",accountRoutes);
module.exports = router;