import React, {useEffect, useState, useCallback} from 'react'
import Recipes from '../Recipes'
import recipeApi from '../../Api/Api'
import createPersistedState from "use-persisted-state";

const useFridgeState = createPersistedState('fridge')

function Fridge({setFavorites, favorites}) {

  const [initialRender, setInitialRender] = useState(false)

  const [search, setSearch] = useState('');
  const [ingredientList, setIngredientList] = useFridgeState([])
  const [searchedIngredients, setSearchedIngredients] = useState([])
  const [recipes, setRecipes] = useState([])

  //When input changes we will update the ingredient search query
  const handleChange = (e) => { 
    setSearch(e.target.value)
  }

  //this will add an ingredient to the list we have in our fridge
  const handleSetIngredients = (e) => {
    if(!ingredientList.includes(e.target.innerText)){
      setIngredientList((prev) => [...prev, e.target.innerText]);
      setSearch("");
    } else {
      alert('Ingredient already in your fridge')
    }
      
  }

  //this will remove an ingredient in our list
  const handleRemoveIngredients = (e) => {
    setIngredientList( (prev) => prev.filter(ele => ele !== e.target.id))
  }

  //Here we will fetch for ingredients and set the searched ingredients to an array of objs
  const handleSearch = 
    useCallback(async () => {
      console.log("handleSearch Called")
      setSearchedIngredients(await recipeApi
        .searchForIngredients(search))
    }, [search])

  //then we fetch for recipes from our ingreidents when our list changes
  const getRecipes = useCallback( 
      async () => {
        console.log("getRecipes Called")
        const queryArr = await recipeApi.getByIngredients(ingredientList);
        setRecipes(queryArr)
      }, [ingredientList])
  
  //call handle search when search changes; this will update fetch ingredients
  useEffect( () => {
    handleSearch()
  }, [handleSearch])

  //this will fetch recipes when ingredient list changes
   useEffect(() => {
    getRecipes();
   }, [getRecipes]);

   useEffect(() => {
    setInitialRender(true)
   },[])

   if(!initialRender){
    return null
   }else{

  return (
    <div className="bg-slate-900 w-screen flex flex-col lg:flex-row md:flex-row">
      <div className="flex flex-col w-full [&>*]:mt-10 [&>*]:ml-auto [&>*]:mr-auto mt-28">
        <p className="text-5xl text-center font-semibold text-slate-200">
          What's in your fridge?
        </p>
        <form className="flex group relative w-fit h-fit">
          <input
            value={search}
            onChange={handleChange}
            placeholder="Search ingredient"
            className="border-2 peer text-white group bg-slate-800 w-[197px] h-[38px] p-1.5 rounded-3xl border-gray-900"
          />
          {
            <ul className="absolute top-[100%] [&>li]:opacity-0 peer-focus:[&>li]:opacity-100 text-center w-full  p-1 ">
              {searchedIngredients.length > 0 &&
                searchedIngredients.map((ele) => {
                  if (ele.name) {
                    return (
                      <li
                        key={ele.name}
                        onClick={handleSetIngredients}
                        className="bg-white border-b-2 m-auto first:rounded-t-lg last:rounded-b-lg w-full"
                      >
                        {ele.name}
                      </li>
                    );
                  } else {
                    return (
                      <div className="bg-white border-b-2 m-auto first:rounded-t-lg last:rounded-b-lg w-full">
                        No results...
                      </div>
                    );
                  }
                })}
            </ul>
          }
        </form>
        {ingredientList.length > 0 &&
        <div className="bg-slate-700 w-[40%] text-white p-5">
          <p className="ml-auto mr-auto w-fit pb-2">Ingredient List</p>
          <div>
            {ingredientList?.map((ing, i) => {
              return (
                <li
                  className="flex justify-between group border-t-[1px] border-slate-500 p-[3px]"
                  key={i}
                >
                  {ing}
                  <button
                    id={ing}
                    onClick={handleRemoveIngredients}
                    className="text-red-400 hidden group-hover:block"
                  >
                    X
                  </button>
                </li>
              );
            })}
          </div>
        </div>
        }
      </div>

      {recipes.length > 0 && (
        <Recipes
          recipes={recipes}
          setFavorites={setFavorites}
          favorites={favorites}
          className="lg:border-l-4 md:border-l-4 border-slate-600 w-full mt-28 flex flex-col [&>*]:ml-auto [&>*]:mr-auto"
        />
      )}
    </div>
  );
}
}

export default Fridge