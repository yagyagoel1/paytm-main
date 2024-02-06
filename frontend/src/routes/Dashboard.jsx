import React, { useEffect,useState } from "react";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import axios from "axios";
const Dashboard = () => {
    const [balance, setBalance] = useState(0);
    const token = localStorage.getItem("authorization");
    let headers = {};
    if (token) {
        headers = {
            authorization: token,
        }
    }
    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/account/balance", { headers })
        .then(response => setBalance(response.data.balance))},[]);
    return <>
        <Appbar></Appbar>
        <Balance value={balance}></Balance>
        <Users headers={headers} ></Users>
    </>
}
export default Dashboard;