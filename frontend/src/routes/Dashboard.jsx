import React from "react";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

const Dashboard = ()=>{
    return<>
<Appbar></Appbar>
<Balance value="2020"></Balance>
<Users></Users>
</>
}
export default Dashboard;