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
      className="fixed transition-all [&>*]:m-auto [&>*]:p-4 duration-100 lg:h-screen md:h-screen sm:w-screen lg:w-10 md:w-10 bottom-0 bg-[#7EFFE0] scroll overflow-hidden lg:flex lg:flex-col lg:hover:w-1/12 md:flex md:flex-col md:hover:w-1/6 flex"
    >
      <Link
        draggable="false"
        to="/"
        className="menu w-full group flex flex-col justify-center align-middle hover:scale-125 font-medium text-[90%] transition-all duration-100"
      >
        <img
          className="w-[40%] m-auto"
          src={fridge}
          alt="Fridge icon"
          draggable="false"
        />
        <p className="tansition-all duration-100 opacity-0 group-hover:opacity-100 m-auto">
          Fridge
        </p>
      </Link>

      <Link
        draggable="false"
        to="/favorite"
        className="menu w-full m-12 group flex flex-col justify-center align-middle hover:scale-125 font-medium text-[90%] transition-all duration-100"
      >
        <img
          className="w-[40%] m-auto"
          src={heart}
          alt="Favorites section"
          draggable="false"
        />
        <span className=" tansition-all duration-100 opacity-0 group-hover:opacity-100 m-auto">
          Favorite
        </span>
      </Link>

      <Link
        draggable="false"
        to="/explore"
        className="menu w-full m-12 group flex flex-col justify-center align-middle hover:scale-125 font-medium text-[90%] transition-all duration-100"
      >
        <img
          className="w-[40%] m-auto"
          src={explore}
          alt="explore section"
          draggable="false"
        />
        <span className="tansition-all duration-100 opacity-0 group-hover:opacity-100 m-auto">
          Explore
        </span>
      </Link>

      <Link
        to="/random"
        draggable="false"
        className="menu w-full m-12 group flex flex-col justify-center align-middle hover:scale-125 font-medium text-[90%] transition-all duration-100"
      >
        <img
          className="w-[40%] m-auto"
          src={newFoods}
          alt="New Foods section"
          draggable="false"
        />
        <span className="tansition-all duration-100 opacity-0 group-hover:opacity-100 m-auto">
          Random
        </span>
      </Link>
    </div>
  );
}

export default Sidebar