const zod = require("zod");
const passwordSchema  = zod.string().min(6);
const usernameSchema = zod.email();
const nameSchema = zod.string().min(3).max(30);

const passwordCheck = (data)=>{passwordSchema.safeParse(data)};
const usernameCheck =(data)=>{ usernameSchema.safeParse(data)};
const nameCheck = (data)=>{nameSchema.safeParse(data)};

module.exports={passwordCheck,usernameCheck,nameCheck};
