import  { useState } from 'react';
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState("Home"); 

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

  const handleLinkClick = (link) => {
    setActiveLink(link); 
    setNav(false);
  }
  
  return (
    <div className='flex justify-between bg-black w-full h-20 items-center px-2 md:px-6 fixed z-50'>
      <div>
        <h1 className='font-signature text-5xl font-semibold ml-2'>
          Onyiicodes</h1>
      </div>
      <ul className='hidden md:flex'>
        {links.map(({ id, link }) => (
          <li className={`px-7 cursor-pointer font-medium text-xl hover:scale-105 duration-200 ${activeLink === link ? 'text-amber-500' : 'text-white'}`} // Apply red color if active, white otherwise
            key={id}> 
            <Link to={link} smooth duration={500}
            onClick={() => handleLinkClick(link)}>{link}</Link>
          </li>
        ))}
      </ul>

      <div className='md:hidden cursor-pointer pr-4 z-10'
        onClick={openNav}>
        {nav ? <FaTimes size={30} className='transition-all duration-1000 ease-in-out '/> : <FaBars size={30} className='nav-icon transition-all duration-1000 ease-in-out '/>}
      </div>

      {nav &&
        <ul className='flex flex-col items-center absolute top-20 right-0 bg-black w-full h-screen overflow-hidden'>
          {links.map(({ id, link }) => (
            <li className={`py-6 cursor-pointer text-4xl ${activeLink === link ? 'text-amber-500' : 'text-white'}`} // Apply red color if active, white otherwise
            key={id}> 
            <Link to={link} smooth duration={500}
            onClick={() => handleLinkClick(link)}>{link}</Link>
          </li>
          ))}
        </ul>}
    </div>
  )
}

export default Navbar;
