import React from 'react'
import Card from './Card'

function Recipes({className, textClassName, recipes, favorites, setFavorites}) {
    
  return (
    <div className={className}>
      <p className={textClassName ? textClassName : 'text-5xl font-semibold text-slate-200 text-center m-auto'}>
        Recipes
      </p>
      {recipes?.map((recipe) => (
        <Card key={recipe.id} favorites={favorites} setFavorites={setFavorites} recipe={recipe} />
      ))}
    </div>
  );
}

export default Recipes