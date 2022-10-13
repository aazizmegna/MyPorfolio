import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import Landing from "./Landing";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Landing />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
