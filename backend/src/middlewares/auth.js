const jwt = require("jsonwebtoken");
const { JWTKEY } = process.env;

const authMiddleware = async (req, res, next) => {
    try {
        const { authorization } = req.headers;

        if (!authorization || !authorization.startsWith("Bearer")) {
            throw Error("invalid token");
        }

        const token = authorization.split(' ')[1];
        try {

            const decoded = await jwt.verify(token, JWTKEY);

            req.userId = decoded.userId;
            next();
        } catch (error) {

            res.status(403).json({ msg: error.message });
        }
    }
    catch (error) {
        res.status(411).json({ msg: error.message })
    }
}
module.exports = authMiddleware;