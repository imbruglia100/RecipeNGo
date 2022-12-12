import React, { useState } from 'react'
import recipeApi from '../../Api/Api'
import Card from '../Card'

function Random() {

  const [randomRecipe, setRandomRecipe] = useState('')

  const handleClick = async () => {
    
    setRandomRecipe(await recipeApi.getRandom())
    console.log(randomRecipe)
  }
  return (
    <div className=" flex flex-col h-screen w-screen">
      {randomRecipe.length > 0 && <Card recipe={randomRecipe[0]}/>}
      <button className='border rounded-full p-4 m-auto h-11' onClick={handleClick}>
        <p className='h-full w-full m-auto'>Random</p>
      </button>
    </div>
  );
}

export default Random