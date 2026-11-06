import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import Models3D from "./Models.jsx";
import Websites from "./Websites.jsx";
import TailorMade from "./Tailorsite.jsx";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modelos-3d" element={<Models3D />} />
          <Route path="/sites" element={<Websites />} />
          <Route path="/sistemas-gestao" element={<TailorMade />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
