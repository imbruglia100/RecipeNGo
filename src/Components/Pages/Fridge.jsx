import React, {useState} from 'react'
import Recipes from '../Recipes'

function Fridge() {

  const [search, setSearch] = useState('');
  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  return (
    <div className="bg-slate-300 w-screen justify-evenly flex h-fit mt-24">
      <div className="flex flex-col justify-center w-full [&>*]:m-auto ">
        <form className="flex">
          <input
            onChange={handleChange}
            placeholder="Search ingredient"
            className="border-2 w-[197px] h-[38px] p-1.5 rounded-3xl border-black"
          />
        </form>
        <div className="bg-[#D74E42] border-2 p-2">
          <p>-Bread</p>
          <p>-Salt</p>
          <p>-Penuts</p>
          <p>-Beans</p>
          <p>-Hummus</p>
        </div>
      </div>
      
      <Recipes className="border-l-4 border-white w-full flex flex-col [&>*]:ml-auto [&>*]:mr-auto" />
    </div>
  );
}

export default Fridge