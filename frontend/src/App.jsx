import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signin from "./routes/Signin"
import SendMoney from "./routes/SendMoney"
import Dashboard from "./routes/Dashboard"
import Signup from "./routes/Signup"
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/send" element={<SendMoney />}></Route>
      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
