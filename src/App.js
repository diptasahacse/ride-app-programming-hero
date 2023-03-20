import logo from "./logo.svg";
import "remixicon/fonts/remixicon.css";
import "./App.css";
import Layouts from "./layouts/Layouts";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Layouts>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </Layouts>
  );
}

export default App;
