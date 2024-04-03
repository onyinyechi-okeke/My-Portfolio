import React from 'react'
import { FaXTwitter } from 'react-icons/fa6'
import { BsTelephoneOutbound } from "react-icons/bs";
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

function Footer() {

  const links = [
    { id: 1,
      href: 'https://github.com/itsjustonyii',
      child: ( < FaGithub  size={30}/> )
    },

    { id: 2,
      href: 'https://www.linkedin.com/in/onyinyechi-okeke-761292251/',
      child: ( < FaLinkedin  size={30}/> )
    },

    { id: 3,
      href: 'https://www.twitter.com/Onyiicodes',
      child: ( < FaXTwitter  size={30}/> )
    },

    { id: 4,
      href: 'mailto:onyinyechiokeke733@gmail.com',
      child: ( < HiOutlineMail  size={30}/> )
    },

    { id: 5,
      href: 'https://docs.google.com/document/d/1JiVrlJps1CVCgEP2-C7uFuqYhGE0sstLbgrrYW6-174/edit?usp=sharing',
      child: ( < BsFillPersonLinesFill  size={30}/> ),
      style: 'animate-bounce'
    }
  ]

  return (
    <div className=' bg-gradient-to-b from-gray-950 to-black w-full  md:hidden'>
      <div className='max-w-screen-lg mx-auto w-full h-full flex flex-col justify-center px-6 py-14'>
        
        <ul className='flex justify-center gap-7 py-6 mb-4'>
           {links.map(({id, href, child, style}) =>(
            <li key={id}
            className={'hover:scale-105 duration-300' + " " + style}>
            <a href= {href}
               target='_blank'>
                 {child}
               </a>
          </li>
           ))}
        </ul>

        <p className='text-justify'>Connect with me across all platforms. I am available for internships, entry level roles and mentorships.</p>
        <p className='pt-3'>You can also view my resume. It's the icon begging to be clicked, lol.</p>
        <div className='flex items-center py-5 gap-5'>
          <BsTelephoneOutbound size={30} />
          <p className='text-amber-500'>+2348140789069</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;