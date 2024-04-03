import React from 'react'

function About() {
  return (
    <div name='About'
    className='bg-gradient-to-b from-gray-950 to-black w-full md:h-screen  border-b-2 border-gray-500'>
        <div className='max-w-screen-lg mx-auto w-full h-full flex flex-col justify-center px-6 md:px-0 py-20 md:py-0'>
        <h2 className='text-2xl sm:text-5xl font-bold pb-8'>About Me</h2>
        <p className='text-justify'>
        Hey! I'm <span className='text-amber-400'>Onyinyechi Okeke</span>, a self-taught frontend web developer with a burning passion for crafting seamless digital experiences. 
        In 2022, despite being in a heaIth related field, I was captivated by the endless possibilities of the web and have dedicated myself to mastering the art of frontend development.
        What sets me apart is my relentless attention to detail. Whether it's perfecting the alignment of elements or ensuring pixel-perfect precision in design implementation, I thrive on delivering nothing short of excellence in every project I undertake.
        </p>
        <p className='py-4 text-justify'>
        Driven by my love for coding, I've honed my skills through countless hours of self-study and hands-on practice. With a keen eye for design and a deep understanding of user experience principles, I bring creativity and functionality to life in every line of code I write. To further expose my self to real word projects and collaborations, I interned at Genesystechhub.
        But it's not just about writing code for me, it's about creating impactful solutions that resonate with users. 
        I believe in the power of technology to connect, inspire, and empower, and I'm committed to using my skills to make a meaningful difference in the digital world.
        </p>
        <p className='text-justify'>
        I am open to internships, mentorships, entry level jobs and gigs. Let's collaborate and bring your ideas to life!
        </p>
        </div>
    </div>
  )
}

export default About;