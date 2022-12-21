import React from 'react'

import FavoriteBtn from './FavoriteBtn'

import { Link } from 'react-router-dom';

function Card({recipe, setFavorites, favorites}) {

  return (
    <div className="ml-auto mr-auto w-[60%] flex mt-10 text-white bg-slate-800 rounded-xl shadow-md shadow-black">
      <div className="w-auto h-auto border-r-4 ">
        <img
          draggable={false}
          className=" w-full h-full rounded-l-xl object-cover"
          src={recipe?.image}
          alt={recipe?.title}
        />
      </div>
      <div className="flex-col p-2 w-full">
        <p className="text-lg font-bold italic">{recipe?.title}</p>
        <ul className="p-2">
          {recipe.missedIngredients ? (
            <p className="text-lg font-bold">Missing:</p>
          ) : (
            <p className="text-lg font-bold">Ingredients:</p>
          )}

          {recipe.missedIngredients
            ? recipe?.missedIngredients?.map((ing, i) => {
                return (
                  <li key={ing?.id * i}>
                    - {ing?.name} / Amount: {ing?.amount}
                  </li>
                );
              })
            : recipe?.extendedIngredients?.map((ing, i) => {
                return (
                  <li key={ing?.id * i}>
                    - {ing?.name} / Amount: {ing?.amount} {ing?.unit}
                  </li>
                );
              })}
        </ul>
        <div className="flex w-full justify-between">
          <Link
            to={"/recipes/" + recipe.id}
            className="rounded-xl p-2 text-white bg-slate-700 mt-auto mb-auto"
            draggable="false"
          >
            Learn More
          </Link>

          <FavoriteBtn
            setFavorites={setFavorites}
            favorites={favorites}
            recipe={recipe}
          />
        </div>
      </div>
    </div>
  );
}

export default Card