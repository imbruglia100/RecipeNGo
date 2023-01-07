import React, {useState, useCallback, useEffect} from 'react'
import recipeApi from '../../Api/Api'
import { useHref } from 'react-router-dom'
import FavoriteBtn from '../FavoriteBtn'

function RecipePage({favorites, setFavorites}) {
    let url = useHref()
    url = url.split('/')
    const id = url[url.length - 1];
    
    const [recipe, setRecipe] = useState({})

    const handleInitialLoad = useCallback(async () => {
        
        setRecipe(await recipeApi.getById(id));

    }, [id])

    useEffect(() => {
      handleInitialLoad();
    }, [id, handleInitialLoad]);
    console.log(recipe)
  return (
    <div className="w-[90%] h-fit flex flex-col m-auto mt-20">
      <h1 className="text-5xl text-white font-extrabold text-center">
        {recipe.title}
      </h1>
      <div className="flex flex-row">
        <span className="rounded-full p-2 bg-green-500 flex flex-col text-gray-900 font-bold text-lg">
          <span className="m-auto">Health: </span>
          <span className="m-auto">{recipe.healthScore}/100</span>
        </span>
        <div className="w-20 ml-auto bg-opacity-50 h-fit bg-white rounded-full">
          <FavoriteBtn
            favorites={favorites}
            setFavorites={setFavorites}
            recipe={recipe}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row md:flex-row opa text-white text-lg justify-center m-12 align-middle h-fit">
        <div className="w-full m-2">
          <img
            draggable="false"
            src={recipe.image}
            className="rounded-lg w-fit"
            alt={"pirctue of " + recipe.title}
          />
          <ul className="text-sm text-slate-400 flex">
            Cuisine:
            {recipe?.cuisines?.map((type) => {
              return (
                <li className="pl-2" key={type}>
                  {type}
                </li>
              );
            })}
          </ul>
          <div className="w-full flex">
            <span className="mr-5 pr-5 border-r-2">
              Ready in: {recipe.readyInMinutes} minutes
            </span>
            <span>Serves: {recipe.servings}</span>
          </div>
        </div>
        <div className="w-full lg:w-[50%] md:w-[50%] m-auto">
          <span className="text-4xl">Ingredients</span>
          <div className="mb-5 mt-5">
            {recipe?.extendedIngredients?.map((ing) => {
              return (
                <li className="" key={ing.id * ing?.amount}>
                  {ing.name}
                  <span className="ml-5">
                    {ing?.amount?.toPrecision(2)} {ing?.unit}
                  </span>
                </li>
              );
            })}
          </div>
          <div className="[&>*]:ml-2 [&>*]:whitespace-nowrap">
            {recipe?.vegan && (
              <span className="bg-orange-500 p-1 text-sm text-black rounded-full">
                Vegan
              </span>
            )}
            {recipe?.vegetarian && (
              <span className="bg-red-400 p-1 text-sm text-black rounded-full">
                Vegetarian
              </span>
            )}
            {recipe?.veryHealthy && (
              <span className="bg-green-500 p-1 text-sm text-black rounded-full">
                Healthy
              </span>
            )}
            {recipe?.veryPopular && (
              <span className="bg-blue-500 p-1 text-sm text-black rounded-full">
                Popular
              </span>
            )}
            {recipe?.glutenFree && (
              <span className="bg-lime-500 p-1 text-sm text-black rounded-full">
                Gluten Free
              </span>
            )}
            {recipe?.dairyFree && (
              <span className="bg-amber-400 p-1 text-sm text-black rounded-full">
                Dairy Free
              </span>
            )}
          </div>
        </div>
      </div>
      <div className=" flex flex-col">
        <span className="text-white text-4xl mb-5 border-b-2">
          Instructions
        </span>

        {recipe.analyzedInstructions &&
          recipe?.analyzedInstructions[0]?.steps.map((inst) => {
            return (
              <span key={inst.number} className="text-white m-4 text-lg">
                {inst?.number}. {inst?.step}
              </span>
            );
          })}
      </div>
    </div>
  );
}

export default RecipePage