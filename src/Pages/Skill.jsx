import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import github from '../assets/github.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import scrum from '../assets/scrum.png'

function Skill() {

    const skills = [
        {
            id: 1,
            src: html,
            title: 'HTML5',
            style: 'shadow-orange-500'
        },

        {
            id: 2,
            src: css,
            title: 'CSS3',
            style: 'shadow-blue-500',
        },

        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500',
        },

        {
            id: 4,
            src: react,
            title: 'React',
            style: 'shadow-teal-500',
            style1: 'animate-spin duration-1000'
        },

        {
            id: 5,
            src: tailwind,
            title: 'Tailwind CSS',
            style: 'shadow-teal-300'
        },

        {
            id: 6,
            src: github,
            title: 'Git & Github',
            style: 'shadow-gray-500'
        },

        {
            id:7,
            src: scrum,
            title: 'SCRUM',
            style: 'shadow-blue-400'
        },
    ]
  return (
    <div name='Skills'
    className='bg-gradient-to-b from-gray-950 to-black w-full border-b-2 border-gray-500'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full py-16'>
            <h2 className='py-5 text-2xl sm:text-5xl font-bold'>Tools I work With</h2>

            <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-8 text-center py-8'>
                
                {skills.map(({id, src, title, style, style1}) => (
                    <div key={id}
                    className={'shadow-md rounded-lg py-4 sm:py-2' + " " + style}>
                    <img className={`w-20 sm:w-24 mx-auto ${style1}`}
                    src={src} alt='' />
                    <p className='mt-4'> {title} </p>
                </div>
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Skill;