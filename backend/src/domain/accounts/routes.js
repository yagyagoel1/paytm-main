const express = require("express");
const authMiddleware = require("../../middlewares/auth");
const router = express.Router();


router.get("/balance", authMiddleware, async (req, res, next) => {
    try {
        const balance = await fetchBalance(req.userId);
        res.status(200).json({ balance: balance });
    }
    catch (error) {
        res.status.json({ msg: error.message });
    }
})


module.exports = router; 