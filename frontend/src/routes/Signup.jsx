import React from "react";
import { Heading } from "../components/Heading";
import { Description } from "../components/Description";
import { TextArea } from "../components/TextArea";
import { Button } from "../components/Button";

const Signup= ()=>{
   return <>
<Heading label = "Sign Up"></Heading>   
<Description content={"Enter your information to create an account"}></Description> 
<TextArea label = "First Name" placeholder = "First Name" ></TextArea>
<Button label ="Sign Up"></Button>
</>
}
export default Signup;