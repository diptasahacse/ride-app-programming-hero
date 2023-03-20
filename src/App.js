import logo from "./logo.svg";
import "remixicon/fonts/remixicon.css";
import "./App.css";
import Layouts from "./layouts/Layouts";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ForgetPassword from "./pages/ForgetPassword";
import Register from "./pages/Register";

function App() {
  return (
    <Layouts>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/forget-password" element={<ForgetPassword />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </Layouts>
  );
}

export default App;
