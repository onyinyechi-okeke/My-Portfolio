
import { FaLongArrowAltRight } from "react-icons/fa";
import Onyii from '../assets/Onyii.jpg'
import { Link } from "react-scroll";

function Home() {
  return (
    <div name='Home'
    className=' bg-gradient-to-b from-gray-950 to-black w-full md:h-screen border-b-2 border-gray-500'>
        <div className='max-w-screen-lg mx-auto flex  items-center flex-col-reverse justify-center h-full px-6 py-10 md:flex-row md:pt-14'>
            <div className='flex flex-col justify-center h-full pl-4 sm:pl-0'>
                <h2 className='text-amber-400 text-2xl sm:text-5xl font-bold pt-5 md:pt-0 text-center md:text-start'>A Passionate Frontend Developer</h2>
                <p className='py-5 md:pr-16 text-center md:text-start md: text-[18px]'>
                I am a highly motivated frontend developer with a passion for creating friendly, interactive and user
                centric products. I am seeking opportunities to leverage my skills as a react developer to
                contribute to innovative web projects and collaborate with dynamic teams.
                </p>
            

            <div>
                <Link className='group w-fit mb-10 md:mb-0 gap-2 bg-gradient-to-r from-amber-400 to-amber-600 px-6 py-3 my-2 flex items-center rounded-md cursor-pointer text-xl mx-auto md:mx-0'
                to='Projects' smooth duration={500}>
                    Portfolio
                    <span className='animate-pulse group-hover:rotate-90 duration-300'><FaLongArrowAltRight size={25}/></span>
                </Link>
            </div>
             </div>

          <figure className='pt-20 md:pt-0'>
            <img src={Onyii} alt='my picture'
            className='rounded-2xl mx-auto w-2/3 md:w-full mt-2 md:mt-0' />
          </figure>
      
        </div>
    </div>
  )
}

export default Home;