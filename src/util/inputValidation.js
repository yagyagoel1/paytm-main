const zod = require("zod");
const passwordSchema  = zod.string().min(6);
const usernameSchema = zod.string().email();
const nameSchema = zod.string().min(3).max(30);

const passwordCheck = (data)=>{return passwordSchema.safeParse(data)};
const usernameCheck =(data)=>{ return usernameSchema.safeParse(data)};
const nameCheck = (data)=>{return nameSchema.safeParse(data)};

module.exports={passwordCheck,usernameCheck,nameCheck};
