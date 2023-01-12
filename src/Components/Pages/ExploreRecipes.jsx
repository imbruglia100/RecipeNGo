import React, {useState, useCallback, useEffect} from 'react'
import useDebounceValue from '../useDebounceValue';
import recipeApi from '../../Api/Api';
import Recipes from '../Recipes';

function ExploreRecipes({favorites, setFavorites}) {

  const [search, setSearch] = useState('')
  const debounceSearch = useDebounceValue(search)
  const [recipes, setRecipes] = useState([])

  const handleChange = e => {
    setSearch(e.target.value)
  } 
   const handleSearch = useCallback(async () => {
     setRecipes(
       await recipeApi.searchForRecipes(debounceSearch)
     );
   }, [debounceSearch]);

   useEffect(() => {
    handleSearch()
   },[handleSearch])
   
  return (
    <div className="bg-slate-900 w-screen overflow-hidden">
      <div className=" w-2/3 m-auto h-fit flex flex-col [&>*]:ml-auto [&>*]:mr-auto [&>*]:mt-10 mt-16">
        <h1 className="text-5xl text-white">Explore</h1>
        <div className="flex [&>*]:ml-1 [&>*]:mr-1">
          <div className="flex flex-col items-center">
            <label for="diet" className="text-white">
              Diet
            </label>
            <select
              name="diet"
              id="diet"
              className="bg-slate-800 rounded-full p-1.5 text-white"
            >
              <option value=""></option>
              <option value="pescetartian">Pescetartian</option>
              <option value="lacto vegetarian">Lacto Vegetarian</option>
              <option value="ovo vegetarian">Ovo Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="paleo">Paleo</option>
              <option value="primal">Primal</option>
              <option value="vegetarian">Vegetarian</option>
            </select>
          </div>
          <div className="flex flex-col items-center">
            <label for="cuisine" className="text-white">
              Cuisine
            </label>
            <select
              name="cuisine"
              id="cuisine"
              className="bg-slate-800 rounded-full p-1.5 text-white"
            >
              <option value=""></option>
              <option value="african">African</option>
              <option value="chinese">Chinese</option>
              <option value="japanese">Japanese</option>
              <option value="korean">Korean</option>
              <option value="vietnamese">Vietnamese</option>
              <option value="thai">Thai</option>
              <option value="indian">Indian</option>
              <option value="british">British</option>
              <option value="irish">Irish</option>
              <option value="french">French</option>
              <option value="italian">Italian</option>
              <option value="mexican">Mexican</option>
              <option value="spanish">Spanish</option>
              <option value="middle eastern">Middle Eastern</option>
              <option value="jewish">Jewish</option>
              <option value="american">American</option>
              <option value="cajun">Cajun</option>
              <option value="southerngreek">Southern</option>
              <option value="greek">Greek</option>
              <option value="german">German</option>
              <option value="nordic">Nordic</option>
              <option value="eastern european">Eastern European</option>
              <option value="caribbean">Caribbean</option>
              <option value="latin american">Latin American</option>
            </select>
          </div>
          <div className="flex flex-col items-center">
            <label for="diet" className="text-white">
              Diet
            </label>
            <select
              name="diet"
              id="diet"
              className="bg-slate-800 rounded-full p-1.5 text-white"
            >
              <option value=""></option>
              <option value="pescetartian">Pescetartian</option>
              <option value="lacto vegetarian">Lacto Vegetarian</option>
              <option value="ovo vegetarian">Ovo Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="paleo">Paleo</option>
              <option value="primal">Primal</option>
              <option value="vegetarian">Vegetarian</option>
            </select>
          </div>

          <input
            value={search}
            onChange={handleChange}
            placeholder="Search Recipes"
            className="border-2 peer mt-auto text-white group bg-slate-800 w-[197px] h-[38px] p-1 rounded-3xl border-gray-900"
          />
        </div>
      </div>
      {recipes.length > 0 && (
        <Recipes
          className="lg:border-l-4 overflow-y-scroll md:border-l-4 border-slate-600 h-screen w-full mt-28 mb-20 flex flex-col [&>*]:ml-auto [&>*]:mr-auto"
          recipes={recipes}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      )}
    </div>
  );
}

export default ExploreRecipes