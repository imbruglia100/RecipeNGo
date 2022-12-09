import React from 'react'

function Card({recipe}) {
  return (
    <div className="m-auto w-[60%] flex bg-orange-300 rounded-xl shadow-md shadow-black border">
      <div className="w-[50%] h-full border-r-4 border-red-400">
        <p className="absolute">{recipe?.title}</p>
        <img
          className=" w-full h-full rounded-l-xl object-cover"
          src={recipe?.image}
          alt={recipe?.title}
        />
      </div>
      <div className="flex-col p-2 w-full">
        <p className='text-2xl font-bold'>Ingredients</p>
        <ul className="p-2">
          {recipe?.extendedIngredients.map((ing) => {
            return (
              <li className="" key={ing?.id}>
                - {ing?.originalName} Amount: {ing?.amount}
              </li>
            );
          })}
        </ul>

        <button className="rounded-xl p-2 text-white bg-slate-700 justify-end">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Card