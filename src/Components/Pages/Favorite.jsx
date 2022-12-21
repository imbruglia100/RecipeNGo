import React, { useEffect, useState, useCallback } from 'react'
import Recipes from '../Recipes';
import recipeApi from '../../Api/Api';

function Favorite({favorites, setFavorites}) {


  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  

  const handleSetFavorites = useCallback(async (favorites) => {
    setFavoriteRecipes(await recipeApi.getByIds(favorites))
  },[])

  useEffect(()=>{
  
   handleSetFavorites(favorites)
    
  },[favorites, handleSetFavorites])
  return (
    <div className="bg-slate-900 flex justify-center w-screen h-screen">
      {favoriteRecipes.length > 0 ? (
        <Recipes setFavorites={setFavorites} favorites={favorites} recipes={favoriteRecipes} />
      ) : (
        
          <span className="text-4xl m-auto text-slate-300">
            You have no favorites! Check out the other tabs to find some
            recipes!
          </span>
      )}
    </div>
  );
}

export default Favorite