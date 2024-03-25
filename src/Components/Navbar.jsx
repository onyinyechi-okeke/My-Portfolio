import {React, useState} from 'react'
import { FaTimes, FaBars, FaCloudDownloadAlt } from "react-icons/fa";
import { DiResponsive } from "react-icons/di";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  }
  const links = [
    {
      id: 1,
      link: "Home"
    },
    {
      id: 2,
      link: "About"
    },
    {
      id: 3,
      link: "Projects"
    },
    {
      id: 4,
      link: "Skills"
    },
    {
      id: 5,
      link: "Contact"
    },
  ];
  return (
    <div className='flex justify-between bg-black w-full h-20 items-center px-2 md:px-6 fixed'>
      <div>
        <h1 className='font-signature text-5xl font-semibold ml-2'>
          Onyiicodes</h1>
      </div>  
      <ul className='hidden md:flex'>
        {links.map(({id, link}) =>(
        <li className= 'px-7 cursor-pointer font-medium text-xl hover:scale-105 duration-200'
        key={id}>{link}</li>  
        ))}
      </ul>

      <div className='md:hidden cursor-pointer pr-4 z-10'
      onClick={openNav}>
        {nav? <FaTimes size={30} />: <FaBars size={30} />}
      </div>

      {nav && 
      <ul className='flex flex-col items-center absolute top-20 right-0 bg-black w-2/3 h-screen'>
        {links.map(({id, link}) =>(
         <li key={id}
         className='py-6 cursor-pointer text-4xl'> {link}</li>
        ))}
      </ul> }
  </div>
  )
}

export default Navbar;