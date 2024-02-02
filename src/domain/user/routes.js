const express = require("express");
const router = express.Router();
const { addUser, verifyUser } = require("./controller");
const { passwordCheck, nameCheck, usernameCheck } = require("../../util/inputValidation");
router.post("/signup", async (req, res) => {
    try {
        const { firstName, lastName, username, password } = req.body;
        if (!passwordCheck(password).success && !nameCheck(firstName).success &&
            !nameCheck(lastName).success && !usernameCheck(username).success) {
            throw Error("invalid input");
        }
        const userid = await addUser(username, password, firstName, lastName);
        res.status(200).json({ userId: userid });
    }
    catch (error) {
        res.status(400).json({ msg: error.message });
    }
});
router.post("/signin", async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!passwordCheck(password).success && !usernameCheck(username).success) {
            throw Error("invalid username or password");
        }
        const token = await verifyUser(username, password);
        res.status(200).json({ token: token });
    } catch (error) {
        res.status(411).json({ msg: error.message });
    }
})
module.exports = router;