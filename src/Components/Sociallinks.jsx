import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

function Sociallinks() {
const links = [
  {
     id: 1,
     child: (
      <> Linkedin <FaLinkedin size={25} /> </>
     ),
     href: 'https://www.linkedin.com/in/onyinyechi-okeke-761292251/',
     style: 'rounded-tr-md'
  },

  {
    id: 2,
    child: (
      <> Github <FaGithub size={25} /> </>
    ),
    href: 'https://github.com/itsjustonyii'
 },

 {
  id: 3,
  child: (
    <> Email <HiOutlineMail size={25} /> </>
  ),
  href: 'mailto:onyinyechiokeke733@gmail.com'
},

{
  id: 4,
  child: (
    <> Resume <BsFillPersonLinesFill size={25} /> </>
  ),
  href: 'https://docs.google.com/document/d/1JiVrlJps1CVCgEP2-C7uFuqYhGE0sstLbgrrYW6-174/edit?usp=sharing',
  style: 'rounded-br-md',
},
];

  return ( 
    <div className='hidden md:flex flex-c0l fixed top-52 left-0'>
      <ul>
        {links.map(({ id, child, href, style }) =>(
          <li key={id}
          className={'bg-gray-500 w-32 h-12 flex justify-between items-center px-4 ml-[-78px] hover:ml-[-4px] duration-300 hover:rounded-lg' + " " + style}>
          <a href={href}
             target='_blank'
             className='flex justify-between items-center w-full'>
            {child}
           </a>
        </li>
        ))}
        
      </ul>
    </div>

  )
}

export default Sociallinks