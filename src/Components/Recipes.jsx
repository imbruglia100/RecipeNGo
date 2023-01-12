import React from 'react'
import Card from './Card'

function Recipes({className, recipes, favorites, setFavorites}) {
    
  return (
    <div className={className}>
     
      {recipes?.map((recipe) => (
        <Card key={recipe.id} favorites={favorites} setFavorites={setFavorites} recipe={recipe} />
      ))}
    </div>
  );
}

export default Recipes