import React, { useCallback, useEffect, useState } from 'react'
import heart from "../Assets/heart.png";
import favoritedHeart from "../Assets/favoritedHeart.png";

function FavoriteBtn({setFavorites, favorites, recipe}) {
    
    const [favorited, setFavorited] = useState(favorites.includes(recipe.id));

    const favoritedCheck = useCallback(() => {

      setFavorited(favorites.includes(recipe.id));

    },[recipe, favorites])
    

    const handleClick = ({target}) => {
        setFavorited(!favorited)

        if (!favorited){
            setFavorites((prev) => [...prev, recipe.id])
            target.src = favoritedHeart
        }else{ 
            setFavorites((prev) => prev.filter((id) => id !== recipe.id))
            target.src  = heart
        }
          console.log("handling favorites state")
    }
  
    useEffect( () => {
        favoritedCheck()

    }, [recipe, favoritedCheck])
  
  return (
    <div>
      <img
        className="m-auto transition-all duration-150"
        width="40%"
        onClick={handleClick}
        src={favorited ? favoritedHeart : heart}
        alt="Favorite this if you like it"
      />

      <p className="m-auto text-sm text-center">
        {recipe?.likes ? recipe.likes : recipe.aggregateLikes}
      </p>
    </div>
  );
}

export default FavoriteBtn