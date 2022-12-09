import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Logo from "./Components/Logo";
import Fridge from "./Components/Pages/Fridge";
import Random from "./Components/Pages/Random";
import Favorite from "./Components/Pages/Favorite";
import ExploreRecipes from "./Components/Pages/ExploreRecipes";

function App() {
  return (
    <div className="App flex bg-slate-900">
      <Router>
        <Sidebar />
        <Logo height="175" className="absolute right-5 top-[-45px] hover:scale-110 duration-100" />
        <Routes>
          <Route path="/" element={<Fridge />} />
          <Route path="/random" element={<Random />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/explore" element={<ExploreRecipes />} />
        </Routes>
      </Router>
    </div>
  );
}

//#7EFFE0
//#D74E42

export default App;
