import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './components/SignUp'
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import UsedCars from "./components/UsedCars";
import NewCars from "./components/NewCars";
import SellCars from "./components/SellCars";

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/usedcars" element={<UsedCars />} />
        <Route path="/newcars" element={<NewCars />} />
        <Route path="/sellcars" element={<SellCars />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
