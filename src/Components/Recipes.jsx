import React from 'react'
import Card from './Card'

function Recipes({className, textClassName, recipes}) {
    
  return (
    <div className={className}>
      <p className={textClassName ? textClassName : 'text-5xl font-semibold text-slate-200 m-auto'}>
        Recipes
      </p>
      {recipes?.map((recipe) => (
        <Card key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default Recipes