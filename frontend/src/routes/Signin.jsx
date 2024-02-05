import React from "react";
import { Heading } from "../components/Heading";
import { Description } from "../components/Description";
import { TextArea } from "../components/TextArea";
import { Button } from "../components/Button";
import { EndText } from "../components/EndText";

const Signin = () => {
    return <div className="bg-[#7f7f7f] h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label="Sign In"></Heading>
                <Description content="Enter your credentials to access your account"></Description>
                <TextArea label="Email" placeholder={"yagyagoel@gmail.com"}></TextArea>
                <TextArea label={"password"} placeholder={"1234"}></TextArea>
                <Button label="Sign In"></Button>
                <EndText text={"Don't have an account"} link="sign up" to="/signup"></EndText>
            </div>
        </div>
    </div>
}
export default Signin;