import { Nav } from "./components/Nav";
import { Home } from "./page/Home";
import { Sublimation } from "./page/Sublimation";
import { Stories } from "./page/Stories";
import { Passions } from "./page/Passions";
import { Discussions } from "./page/Discussions";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sublimation" element={<Sublimation />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/passions" element={<Passions />} />
          <Route path="/discussions" element={<Discussions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
