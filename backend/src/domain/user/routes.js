const express = require("express");
const router = express.Router();
const { addUser, verifyUser, updateUser, findUser } = require("./controller");
const { passwordCheck, nameCheck, usernameCheck, updateCheck } = require("../../util/inputValidation");
const authMiddleware = require("../../middlewares/auth");
router.post("/signup", async (req, res) => {
    try {
        const { firstName, lastName, username, password } = req.body;
        if (!passwordCheck(password).success && !nameCheck(firstName).success &&
            !nameCheck(lastName).success && !usernameCheck(username).success) {
            throw Error("invalid input");
        }
        const userid = await addUser(username, password, firstName, lastName);
        res.status(200).json({ msg : "successful signup"});
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
router.put("/", authMiddleware, async (req, res) => {
    try {
        const { success } = updateCheck(req.body);
        if (!success) {
            throw Error("wrong input");
        }
        await updateUser(req.body, req.userId);
        res.status(200).json({
            msg: "updated successfully"
        });
    } catch (error) {
        res.status(411).json({
            msg: error.message
        })
    }
})
router.get("/bulk", authMiddleware, async (req, res, next) => {
    try {
        const filter = req.query.filter;
        
        const users = await findUser(filter);
        console.log(users)
        res.status(200).json({
            users: users.map(user => {
                return {
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    userId: user._id,
                }
            })
        });
    }
    catch (error) {
        res.status(400).json(error.message);
    }
})

module.exports = router;