import Home from "./views/home";
import Details from "./views/details";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pokemon/:id" caseSensitive={false} element={<Details />} />
        <Route path="/" caseSensitive={false} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
