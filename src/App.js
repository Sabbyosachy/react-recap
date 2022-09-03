import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import DetailsUser from "./Pages/DetailsUsre/DetailsUser";
import Home from "./Pages/Home/Home";
import LogInEmail from "./Pages/LogInEmail/LogInEmail";
// import Login from "./Pages/Login/Login";
import Navigation from "./Pages/Navigation/Navigation";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:userId" element={<DetailsUser />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/loginemail" element={<LogInEmail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
