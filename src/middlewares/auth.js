const jwt  = require("jsonwebtoken");
JWTKEY= process.env;

const authMiddleware = async (req,res,next)=>{
    const {Authorization} = req.header;
    if(!Authorization||Authorization.startswith("Bearer"))
    {
        throw Error("invalid token");
    }
    
    const token = Authorization.split(' ')[1];
    try {
        const decoded = await jwt.verify(token,JWTKEY);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        
        res.status(403).json({msg : error.message});
    }
}