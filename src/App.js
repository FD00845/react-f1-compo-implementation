 import './App.css';
import { Dynamicformd1 } from "./f1-components/Dynamicformd1";
import { Basicdetails } from './f1-components/Basicdetails';
import { Users } from './f1-components/Users';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {     
  return (
    <div>
      {/* <Dynamicformd1></Dynamicformd1> */}
      <BrowserRouter>
      <Routes>
          <Route exact path="" element={<Dynamicformd1 />}></Route>
          <Route exact path="/Users" element={<Users />}></Route> 
          <Route exact path="/Update" element={<Dynamicformd1 />}></Route> 
          <Route exact path="/Basicdetails" element={<Basicdetails />}></Route> 
      </Routes>
    </BrowserRouter>
    </div>  
  );
}

export default App;
