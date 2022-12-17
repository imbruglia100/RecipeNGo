import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Logo from "./Components/Logo";
import Fridge from "./Components/Pages/Fridge";
import Random from "./Components/Pages/Random";
import Favorite from "./Components/Pages/Favorite";
import ExploreRecipes from "./Components/Pages/ExploreRecipes";
import RecipePage from "./Components/Pages/RecipePage";


function App() {

  const [favorites, setFavorites] = useState([])
  
  return (
    <div className="App flex bg-slate-900">
      <Router>
        <Sidebar />
        <Logo
          height="175"
          className="absolute right-5 top-[-45px] hover:scale-110 duration-100"
        />
        <Routes>
          <Route
            path="/"
            element={
              <Fridge favorites={favorites} setFavorites={setFavorites} />
            }
          />
          <Route
            path="/random"
            element={
              <Random favorites={favorites} setFavorites={setFavorites} />
            }
          />
          <Route
            path="/favorite"
            element={
              <Favorite favorites={favorites} setFavorites={setFavorites} />
            }
          />
          <Route
            path="/explore"
            element={
              <ExploreRecipes
                favorites={favorites}
                setFavorites={setFavorites}
              />
            }
          />
          <Route
            path="/recipes/:id"
            element={
              <RecipePage 
                favorites={favorites} 
                setFavorites={setFavorites} 
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

//#7EFFE0
//#D74E42

export default App;
