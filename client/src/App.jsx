import { Nav } from "./components/Nav";
import { Home } from "./page/Home";
import { Sublimation } from "./page/Sublimation";
import { Passions } from "./page/Passions";
import { Actions } from "./page/Actions";
import { Discussions } from "./page/Discussions";
import { Form } from "./components/Form";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sublimation" element={<Sublimation />} />
          <Route path="/passions" element={<Passions />} />
          <Route path="/actions" element={<Actions />} />
          <Route path="/discussions" element={<Discussions />} />
        </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
