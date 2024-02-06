import React, { useState } from "react";
import { Heading } from "../components/Heading";
import { Description } from "../components/Description";
import { TextArea } from "../components/TextArea";
import { Button } from "../components/Button";
import { EndText } from "../components/EndText";
import axios from "axios";

const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return <>
        <div className="h-screen bg-[#7f7f7f] flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label="Sign Up"></Heading>
                    <Description content={"Enter your information to create an account"}></Description>
                    <TextArea onChange={e =>
                        setFirstName(e.target.value)} label="First Name" placeholder="First Name" ></TextArea>
                    <TextArea onChange={e =>
                        setLastName(e.target.value)} label="Last Name" placeholder="Last Name" ></TextArea>
                    <TextArea onChange={e =>
                        setUsername(e.target.value)} label="Email" placeholder="Your Email" ></TextArea>
                    <TextArea onChange={e =>
                        setPassword(e.target.value)} label="Password" placeholder="Password" ></TextArea>
                    <div className="py-3">
                        <Button onClick={async () => {
                         const response =   await axios.post("http://localhost:3000/api/v1/user/signup", {
                                username: username,
                                password: password,
                                firstName: firstName,
                                lastName: lastName,
                            })
                        }
                        } label="Sign Up"></Button>
                    </div>
                    <EndText text="Already have an account? " to="/signin" link="Login"></EndText>
                </div>
            </div>
        </div>
    </>
}
export default Signup;