import React from 'react'

function Card({recipe}) {
  console.log(recipe)
  return (
    <div className="ml-auto mr-auto w-[60%] flex mt-10 bg-[#ffc6c1] rounded-xl shadow-md shadow-black border">
      <div className="w-[50%] h-full border-r-4 ">
        <img
          className=" w-full h-full rounded-l-xl object-cover"
          src={recipe?.image}
          alt={recipe?.title}
        />
      </div>
      <div className="flex-col p-2 w-full">
        <p className="text-lg font-bold">{recipe?.title}</p>
        <p className="text-lg font-bold">Have:</p>
        <ul className="p-2">
          {recipe?.usedIngredients.map((ing) => {
            return (
              <li className="" key={ing?.id}>
                - {ing?.name} Amount: {ing?.amount}
              </li>
            );
          })}
          <p className="text-lg font-bold">Missing:</p>
          {recipe?.missedIngredients.map((ing) => {
            return (
              <li className="" key={ing?.id}>
                - {ing?.name} Amount: {ing?.amount}
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