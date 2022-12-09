import React from 'react'
import Card from './Card'

function Recipes({className, textClassName, recipes}) {
    
  return (
    <div className={className}>
      <p className={textClassName ? textClassName : 'text-5xl mb-10">Recipes'}>
        Recipes
      </p>
      {recipes.map((recipe) => (
        <Card recipe={recipe} />
      ))}
    </div>
  );
}

export default Recipes