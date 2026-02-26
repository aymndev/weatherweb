

import React from "react"
import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <div className="bg-gray-200 h-screen w-[15%] rounded-r-xl  mr-1">
            <div className="flex flex-col justify-center items-center pt-5 text-center">
                <div className='flex items-center  mb-5 flex-col    w-full border-b-[1px]  '>
                    <h1 className='text-xl font-bold m-5'>Weather</h1>


                </div>

                <nav className=" flex flex-col  text-black gap-5">
                    <Link  className=" block w-full pl-9 pr-9  py-2 px-4 hover:bg-sky-400 rounded-lg transition transforme hover:scale-105 hover:font-bold  " to="/"> Home</Link>
                    <Link className="block  w-full pl-9 pr-9 py-2 px-4  hover:bg-sky-400 rounded-lg transition transforme hover:scale-105 hover:font-bold   "  to="/today"> Today</Link>

                </nav>

            </div>

        </div>
    )
}