import "./App.css";
import Home from "./Home";
import RiddleOne from "./RiddleOne";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RiddleTwo from "./RiddleTwo";
import RiddleThree from "./RiddleThree";
import End from "./End";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex items-center justify-center w-screen h-screen bg-[#FF69D2] flex-col px-4">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/r1" element={<RiddleOne />} />
            <Route path="/r2" element={<RiddleTwo />} />
            <Route path="/r3" element={<RiddleThree />} />
            <Route path="/rend" element={<End />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
