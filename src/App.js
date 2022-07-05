import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Admin from "./Pages/Admin/Admin";
import Dashboard from "./Pages/Admin/Dashboard";
import AddUser from "./Pages/Admin/AddUser";
import AllUser from "./Pages/Admin/AllUser";
function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route></Route>
            <Route path="/" element={<Homepage />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="admin" element={<Admin />} />
            <Route path="dashboard" element={<Dashboard />}>
              <Route path="addUser" element={<AddUser />} />
              <Route path="allusers" element={<AllUser />} />
              
            
              <Route />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
