import React, {useState, useCallback, useEffect} from 'react'
import recipeApi from '../../Api/Api';
import Recipes from '../Recipes';

function ExploreRecipes({favorites, setFavorites}) {

  const [recipes, setRecipes] = useState([])
  const [filters, setFilters] = useState({
    query: '',
    sort: 'popularity',
    cuisine: '',
    type: '',
    diet: ''
  })

  const handleFilterChange = (e) =>{
    setFilters({...filters, [e.target.id]: e.target.value})
  }
   const handleSearch = useCallback(async () => {
     setRecipes(
       await recipeApi.searchForRecipes(filters)
     );
   }, [filters]);
   
   useEffect(() => {
    console.log(recipes.results)
   }, [recipes])

  return (
    <div className="bg-slate-900 w-screen overflow-x-hidden">
      <div className=" w-2/3 m-auto h-fit flex flex-col [&>*]:ml-auto [&>*]:mr-auto [&>*]:mt-10 mt-16">
        <h1 className="text-5xl text-white">Explore</h1>
        <input
          id="query"
          onChange={handleFilterChange}
          placeholder="Search Recipes"
          className="border-2 peer mt-auto text-white group bg-slate-800 w-[197px] h-[38px] p-1 rounded-3xl border-gray-900"
        />
        <div className="flex [&>*]:ml-1 justify-center [&>*]:mr-1 [&>*]:w-fit flex-wrap">
          <div className="flex flex-col items-center">
            <label htmlFor="diet" className="text-white">
              Diet
            </label>
            <select
              name="diet"
              onChange={handleFilterChange}
              id="diet"
              className="bg-slate-800 rounded-full p-1.5 text-white"
            >
              <option value=""></option>
              <option value="pescetartian">Pescetartian</option>
              <option value="lacto%20vegetarian">Lacto Vegetarian</option>
              <option value="ovo%20vegetarian">Ovo Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="paleo">Paleo</option>
              <option value="primal">Primal</option>
              <option value="vegetarian">Vegetarian</option>
            </select>
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="cuisine" className="text-white">
              Cuisine
            </label>
            <select
              name="cuisine"
              onChange={handleFilterChange}
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
              <option value="middle%20eastern">Middle Eastern</option>
              <option value="jewish">Jewish</option>
              <option value="american">American</option>
              <option value="cajun">Cajun</option>
              <option value="southerngreek">Southern</option>
              <option value="greek">Greek</option>
              <option value="german">German</option>
              <option value="nordic">Nordic</option>
              <option value="eastern%20european">Eastern European</option>
              <option value="caribbean">Caribbean</option>
              <option value="latin%20american">Latin American</option>
            </select>
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="sort" className="text-white">
              Sort
            </label>
            <select
              name="sort"
              onChange={handleFilterChange}
              id="sort"
              className="bg-slate-800 rounded-full p-1.5 text-white"
            >
              <option value="popularity">Popularity</option>
              <option value="healthiness">Healthiness</option>
              <option value="price">price</option>
              <option value="meta-score">Our Score</option>
              <option value="random">Random</option>
            </select>
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="type" className="text-white">
              Type
            </label>
            <select
              name="type"
              onChange={handleFilterChange}
              id="type"
              className="bg-slate-800 rounded-full p-1.5 text-white"
            >
              <option value=""></option>
              <option value="main%20course">Main Course</option>
              <option value="side%20dish">Side Dish</option>
              <option value="dessert">Dessert</option>
              <option value="appetizer">Appetizer</option>
              <option value="salad">Salad</option>
              <option value="bread">Bread</option>
              <option value="breakfast">Breakfast</option>
              <option value="soup">Soup</option>
              <option value="beverage">Beverage</option>
              <option value="sauce">Sauce</option>
            </select>
          </div>
        </div>
        <button
          id="submit"
          type="submit"
          onClick={handleSearch}
          className="bg-slate-500 w-24 p-2 rounded-full"
        >
          Search
        </button>
      </div>
      {recipes?.results?.length > 0 && (
        <Recipes
          className="lg:border-l-4 lg:overflow-y-scroll md:overflow-y-scroll md:border-l-4 border-slate-600 h-screen w-full mt-28 mb-20 flex flex-col [&>*]:ml-auto [&>*]:mr-auto"
          recipes={recipes.results}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      )}
    </div>
  );
}

export default ExploreRecipes