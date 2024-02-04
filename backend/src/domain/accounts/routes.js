const express = require("express");
const authMiddleware = require("../../middlewares/auth");
const { fetchBalance, transferFunds } = require("./controller");
const router = express.Router();

router.use(authMiddleware);
router.get("/balance",  async (req, res, next) => {
    try {
        const balance = await fetchBalance(req.userId);
        res.status(200).json({ balance: balance });
    }
    catch (error) {
        res.status.json({ msg: error.message });
    }
})

router.post("/transfer", async (req,res,next)=>{
    try {
        const {to,amount} = req.body;
        await transferFunds(req.userId,to,amount);
        res.status(200).json({msg : "Transfer successful"});
    } catch (error) {
        res.status(400).json({msg : error.message});
    }
})
module.exports = router; 