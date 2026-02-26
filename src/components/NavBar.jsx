import React from 'react'
import { useState } from 'react'
import { ImSearch } from "react-icons/im";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";


export default  function  NavBar(){
    const [input,setInput]=useState("");
  
  return (
    <div className='flex justify-between bg-gray-200  items-center justify-center w-full rounded-lg p-2  pr-55'>
        
        <div className=' flex relative w-full flex flex-row mr-20 ml-35 pl-80 justify-center items-center'>
            <div className='flex flex-row transform hover:scale-105 transition-all  duration-300'>

           
            <input
            placeholder='Search for a city...'
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            className='w-full bg-white rounded-l-lg p-3 pr-12 focus:outline-none '
            
            />
            <button   className='bg-white h-12 w-10 flex  items-center justify-center rounded-r-lg pr-5 '>
                <ImSearch size={20} />
            </button>
            </div>
            <div className='flex justify-center items-center gap-5 ml-5  '>
                <MdLightMode size={20} className='hover:bg-orange-300 hover:rouded-xl hover:rounded-xl m-5 transform hover:scale-105 transition-all  duration-300 ' />
                
                <MdDarkMode size={20} className='hover:bg-gray-400 hover:rouded-xl hover:rounded-xl m-5 transform hover:scale-105 transition-all  duration-300 '  />


            </div>
            <div className='flex  justify-center items-center ml-25'>
                <TiThMenu size={20} />

            </div>
            

        </div>
        <div/>
        
        
    </div>
  )
}