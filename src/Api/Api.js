const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_HOST_URL
  },
};

const recipeApi = {
  getRandom: async () => {
    return await fetch(
      "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1",
      options
    )
      .then((response) => response.json())
      .then((response) => response.recipes)
      .catch((err) => console.error(err));
  },

  getByIngredients: async (ingredientList) => {
    const querySearchIngredients = ingredientList.join("$2C").split(" ").join("%20");
    return await fetch(
      `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=${querySearchIngredients}&number=5&ranking=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => response)
      .catch((err) => console.error(err));
  },

  getByIds: async (ids) => {
    const queryIds = ids.join("%2C%20").split(" ").join("");
    return await fetch(
      `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk?ids=${queryIds}`,
      options
    )
      .then((response) => response.json())
      .then((response) => response)
      .catch((err) => console.error(err));
  },

  getById: async (id) => {
    return await fetch(
      `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`,
      options
    )
      .then((response) => response.json())
      .then((response) => response)
      .catch((err) => console.error(err));
  },

  searchForIngredients: async (search) => {
    return await fetch(
      `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/autocomplete?query=${search}&number=10`,
      options
    )
      .then((response) => response.json())
      .then((response) => response)
      .catch((err) => console.error(err));
  },
};

export default recipeApi;