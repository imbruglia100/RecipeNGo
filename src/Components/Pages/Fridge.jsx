import React, {useEffect, useState} from 'react'
import Recipes from '../Recipes'
import recipeApi from '../../Api/Api'

function Fridge() {

  const [search, setSearch] = useState('');
  const [ingredients, setIngredients] = useState([])
  const [searchedIngredients, setSearchedIngredients] = useState([])
  const [recipes, setRecipes] = useState([])

  const handleChange = (e) => { 
    setSearch(e.target.value)
  }

  const handleSetIngredients = (e) => {
    setIngredients( prev => [...prev, e.target.innerText])
  }

  const handleSearch = async (search) => {
    const quer = await recipeApi
      .searchForIngredients(search);
    setSearchedIngredients(quer)
  }

  const getRecipies = async (ingredients) => {
    const quer = await recipeApi
      .getByIngredients(ingredients)
    setRecipes(quer)
  }
  useEffect( () => {
    handleSearch(search)
    getRecipies(ingredients)

  } ,[search, ingredients])

  return (
    <div className="bg-slate-900 w-screen flex flex-col lg:flex-row md:flex-row">
      <div className="flex flex-col w-full [&>*]:mt-10 [&>*]:ml-auto [&>*]:mr-auto mt-28">
        <p className="text-5xl font-semibold text-slate-200">
          What's in your fridge?
        </p>
        <form className="flex relative w-fit h-fit">
          <input
            onChange={handleChange}
            placeholder="Search ingredient"
            className="border-2 text-white bg-slate-800 w-[197px] h-[38px] p-1.5 rounded-3xl border-gray-900"
          />
          {
            <ul className="absolute top-[100%] w-full p-1 ">
              {searchedIngredients.length > 0 &&
                searchedIngredients.map((ele) => {
                  if(ele.name)
                  {
                    return (
                      <button
                        key={ele.name}
                        onClick={handleSetIngredients}
                        className="bg-white border-b-2 m-auto first:rounded-t-lg last:rounded-b-lg w-full"
                      >
                        {ele.name}
                      </button>
                    );
                  } else {
                    return (<div
                      className="bg-white border-b-2 m-auto first:rounded-t-lg last:rounded-b-lg w-full"
                    >
                      No results...
                    </div>)
                  }
                })}
            </ul>
          }
        </form>
        <div className="bg-slate-700 w-[40%] text-white p-5">
          <p className="ml-auto mr-auto w-fit">Ingredient List</p>
          <div>
            {ingredients?.map((ing, i) => {
              return <li key={i}>{ing}</li>;
            })}
          </div>
        </div>
      </div>

      {ingredients.length > 0 && (
        <Recipes
          recipes={recipes}
          className="border-l-4 border-slate-600 w-full mt-28 flex flex-col [&>*]:ml-auto [&>*]:mr-auto"
        />
      )}
    </div>
  );
}

export default Fridge