import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarComp from "./components/Navbar/NavbarComp";
import Home from "./pages/Home/Home";
import About from "./pages/About/About"
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavbarComp/>
          <div className="pages">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About/>}/>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
