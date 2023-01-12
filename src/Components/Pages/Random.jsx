import React, { useState } from 'react'
import recipeApi from '../../Api/Api'
import Card from '../Card'

function Random({setFavorites, favorites}) {

  const [randomRecipe, setRandomRecipe] = useState({})

  const handleClick = async () => {
    
    setRandomRecipe(await recipeApi.getRandom())

  }
  return (
    <div className=" flex flex-col h-screen w-screen justify-center align-middle">

      {randomRecipe.length > 0 && (
        <Card setFavorites={setFavorites} favorites={favorites} recipe={randomRecipe[0]} />
      )}

      <button className="border rounded-full p-3 w-fit ml-auto mr-auto mt-5 bg-slate-700" onClick={handleClick}>
        Random
      </button>
    </div>
  );
}

export default Random