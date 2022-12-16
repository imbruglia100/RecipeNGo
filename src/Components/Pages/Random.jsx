import React, { useState } from 'react'
import recipeApi from '../../Api/Api'
import Card from '../Card'

function Random({setFavorites, favorites}) {

  const [randomRecipe, setRandomRecipe] = useState({})

  const handleClick = async () => {
    
    setRandomRecipe(await recipeApi.getRandom())

  }
  return (
    <div className=" flex flex-col w-screen mt-[5%]">
      {randomRecipe.length > 0 && (
        <Card setFavorites={setFavorites} favorites={favorites} recipe={randomRecipe[0]} />
      )}

      <button className="border rounded-full p-3 w-fit ml-auto mr-auto mt-6 bg-slate-500" onClick={handleClick}>
        Random
      </button>
    </div>
  );
}

export default Random