import React from 'react'
import fridge from '../Assets/fridge.png'
import heart from "../Assets/heart.png"
import explore from "../Assets/explore.png"
import newFoods from "../Assets/newFood.png"
import {Link} from "react-router-dom"

function Sidebar() {

  return (
    <div
      id="sideBar"
      className="fixed transition-all [&>*]:m-auto [&>*]:p-4 duration-100 h-screen w-10 bg-[#7EFFE0] scroll overflow-hidden lg:flex flex-col lg:hover:w-1/12 md:flex md:hover:w-1/6 hidden"
    >
      <Link
        to="/"
        className="menu w-full group flex flex-col justify-center align-middle hover:scale-125 font-medium text-[90%] transition-all duration-100"
      >
        <img className="w-[40%] m-auto" src={fridge} alt="Fridge icon" />
        <p className="tansition-all duration-100 opacity-0 group-hover:opacity-100 m-auto">
          Fridge
        </p>
      </Link>

      <Link
        to="/favorite"
        className="menu w-full m-12 group flex flex-col justify-center align-middle hover:scale-125 font-medium text-[90%] transition-all duration-100"
      >
        <img className="w-[40%] m-auto" src={heart} alt="Favorites section" />
        <span className=" tansition-all duration-100 opacity-0 group-hover:opacity-100 m-auto">
          Favorite
        </span>
      </Link>

      <Link
        to="/explore"
        className="menu w-full m-12 group flex flex-col justify-center align-middle hover:scale-125 font-medium text-[90%] transition-all duration-100"
      >
        <img className="w-[40%] m-auto" src={explore} alt="explore section" />
        <span className="tansition-all duration-100 opacity-0 group-hover:opacity-100 m-auto">
          Explore
        </span>
      </Link>

      <Link
        to="/random"
        className="menu w-full m-12 group flex flex-col justify-center align-middle hover:scale-125 font-medium text-[90%] transition-all duration-100"
      >
        <img
          className="w-[40%] m-auto"
          src={newFoods}
          alt="New Foods section"
        />
        <span className="tansition-all duration-100 opacity-0 group-hover:opacity-100 m-auto">
          Random
        </span>
      </Link>
    </div>
  );
}

export default Sidebar