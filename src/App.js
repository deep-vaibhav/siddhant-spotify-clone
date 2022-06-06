import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import AddSong from "./pages/addSong/addSong";
import Login from "./pages/login/login";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-song" element={<AddSong />} />
      </Routes>
    </Router>
  );
}

export default App;
