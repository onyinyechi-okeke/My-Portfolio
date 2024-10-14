import React from 'react'
import autopay from '../assets/techcity.png'
import goforit from '../assets/goforit.png'
import portfolio from '../assets/portfolio.png'
import { FaGithub, FaCloudDownloadAlt } from "react-icons/fa";

function Project() {

  const links = [
      {
         id: 1,
         src: goforit,
         href1: 'https://github.com/itsjustonyii/Quizzy',
         href2: 'https://quizzy-f.vercel.app',
         p: 'This is Goforit, a fun trivia app'
      },

      {
        id: 2,
        src: autopay,
        href1: 'https://github.com/learnable-2022/PS-3-FE',
        href2: 'https://techcityafrica.vercel.app/',
        p: 'TechCityAfrica, UI/UX of a fintech app'
      },

      {
        id: 3,
        src: portfolio,
        href1: 'https://github.com/itsjustonyii/My-Portfolio',
        href2: 'https://onyiicodes.vercel.app',
        p: 'This is my responsive portfolio website'
      },
  ]

  return (
    <div name='Projects'
    className='bg-gradient-to-b from-gray-950 to-black w-full md:h-screen border-b-2 border-gray-500'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full py-20 md:py-0'>
            <h2 className='pb-8 text-2xl sm:text-5xl font-bold'>My Works</h2>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

              {links.map(({ id, src, href1, href2, p}) => (
                    <div key={id}
                    className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt='payment app'
                        className='rounded-md'
                        />
                        <p className='text-center pt-2'>{p}</p>
                        <div className='flex justify-around m-2'>
                          <a href= {href1}
                             target='_blank'>
                              <FaGithub className='hover:scale-110 duration-200'
                              size={30}/>
                             </a>
    
                             <a href= {href2}
                             target='_blank'>
                              <FaCloudDownloadAlt className='hover:scale-110 duration-200'
                              size={30}/>
                             </a>
                        </div>
                    </div>
              ))}
                
            </div>
        </div>
    </div>
  )
}

export default Project;