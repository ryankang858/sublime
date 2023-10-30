import { Nav } from "./components/Nav";
import { Home } from "./page/Home";
import { Sublimation } from "./page/Sublimation";
import { Passions } from "./page/Passions";
import { Actions } from "./page/Actions";
import { Discussions } from "./page/Discussions";
import { Form } from "./components/Form";
import { ForumGuideInfoBox} from "./components/ForumGuideInfoBox";
import { ForumGuide} from "./page/ForumGuide";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Do } from "./page/Do";

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
          <Route path="/do" element={<Do />} />
          <Route path="/forumguide" element={<ForumGuide />} />
        </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
