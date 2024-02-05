import React from "react";
import { Heading } from "../components/Heading";
import { Description } from "../components/Description";
import { TextArea } from "../components/TextArea";
import { Button } from "../components/Button";
import { EndText } from "../components/EndText";


const Signup= ()=>{
   return <>
   <div className="h-screen bg-[#7f7f7f] flex justify-center">
    <div className="flex flex-col justify-center">
    <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
<Heading label = "Sign Up"></Heading>   
<Description content={"Enter your information to create an account"}></Description> 
<TextArea label = "First Name" placeholder = "First Name" ></TextArea>
<TextArea label = "Last Name" placeholder = "Last Name" ></TextArea>
<TextArea label = "Email" placeholder = "Your Email" ></TextArea>
<TextArea label = "Password" placeholder = "Password" ></TextArea>
<div className="py-3">
<Button label ="Sign Up"></Button>
</div>
<EndText text = "Already have an account? " link = "Login"></EndText>
</div>
</div>
</div>
</>
}
export default Signup;