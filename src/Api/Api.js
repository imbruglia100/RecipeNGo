const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "699bcbd3e6msh2e191c511d29987p132ec2jsn5bb54351c4f8",
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
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

  getByIngredients: async (ingredients) => {
    const querySearchIngredients = ingredients.join("%2C");
    fetch(
      `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=${querySearchIngredients}&number=5&ignorePantry=true&ranking=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => response.recipes)
      .catch((err) => console.error(err));
  },

  getById: async (id) => {
    await fetch(
      `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/tasteWidget.json?normalize=false`,
      options
    )
      .then((response) => response.json())
      .then((response) => response.recipes)
      .catch((err) => console.error(err));
  },
};

export default recipeApi;
