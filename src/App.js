import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react"

import AuthContext from "./Contexts/AuthContext.js"
import LoginPage from "./Components/LoginPage.js";
import SignUpPage from "./Components/SignUpPage.js";
import Home from "./Components/Home.js"
import Input from "./Components/InPut.js";
import Output from "./Components/OutPut.js";


export default function App() {
const [user, setUser] = useState();

  return (
     <AuthContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
           <Route path="/sign-up" element={<SignUpPage />} /> 
           <Route path="/home" element={<Home />} /> 
           <Route path="/input" element={<Input />} /> 
           <Route path="/output" element={<Output />} /> 
        </Routes>
      </BrowserRouter>
     </AuthContext.Provider>
  );
}
