import React, { useState } from 'react'
import { IoMailOutline } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import banner from "../assets/banner.jpg"
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Card from './ProjectCard';
import Skills from './Skills';
import Contact from './Contact';
import { FaHome } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import logo from  "../assets/logo.jpg"
import { Burger } from './Burger';
import { FaGithub } from "react-icons/fa";


const Navlinks = [
    {
        title: "Home",
        linkto: "home",
    },
    {
        title: "Projects",
        linkto: "projects",
    },
    {
        title: "Skills",
        linkto: "skills",
    },
];



const Navbar = () => {

    const [text] = useTypewriter({
        words: ["I am a full stack developer.", "I build things for the web.", "Crafting efficient web systems.", "I learn new things everyday." ],
        loop: 0,
        typeSpeed: 60,
        deleteSpeed: 25
    })
    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }


  return (
    <div className={` ${darkMode && "dark"}  `}>
      <div className='fixed top-0 right-0 left-0 mx-auto w-full flex items-center justify-between bg-[#cfd5ff] dark:bg-slate-900 opacity-90  dark:text-richblack-5 h-16 z-10'>
        <nav className='relative flex items-center justify-between w-9/12 mx-auto'>
          <div className=''>
            {/* <div className='flex gap-x-6'>
              {Navlinks.map((link, i) => (
                <a key={i} href={`#${link.linkto}`} className='text-lg font-semibold cursor-pointer'>
                  {link.title}
                </a>
              ))}
              
            </div> */}
            <div className='flex gap-4'>
              <a href='#home' className='dark:text-slate-400 dark:hover:text-white'><FaHome size={24} /> </a>
              <a href='https://www.linkedin.com/in/theravijangir/' target='_blank' className='dark:text-slate-400 dark:hover:text-white'><FaLinkedinIn size={24} /> </a>
              <a href='https://github.com/theravijangid' target='_blank' className='dark:text-slate-400 dark:hover:text-white'><FaGithub size={24} /></a>
            </div>
            
          </div>
          {/* <div className='lg:hidden mt-2 '>
                <Burger/>
          </div> */}
          
          <div className='flex gap-x-4 items-center'>
            <div clme=' cursor-pointer'>
              <a href='#contact' className='dark:text-slate-300 dark:hover:text-white'><IoMailOutline size={24} /></a>
            </div>
            <button onClick={toggleDarkMode} className=' cursor-pointer dark:text-slate-300 dark:hover:text-white'>
              {darkMode ? <MdOutlineLightMode size={24} /> : <MdDarkMode size={24} />}
            </button>
          </div>
        </nav>
      </div>
      

    {/* main section */}
      <section  id='home' className='relative  bg-custom-gradient dark:bg-dark-custom-gradient dark:text-richblack-5 flex flex-col'>
        {/* About  */}
        <div  className='w-9/12 pt-28 lg:pt-0 lg:mt-52 lg:my-[85px] mx-auto flex flex-col lg:flex-row items-center lg:justify-between  '>
            <div className='lg:w-[48%] '>
                <img
                    src={banner}
                    className='rounded-md hidden lg:block'
                />
                <img
                  src={logo}
                  className='lg:hidden w-[180px] rounded-full'
                />
            </div>
            <div className='flex flex-col mt-3 lg:mt-0 lg:w-[48%] justify-center gap-y-5'>
                <p className='text-2xl mt-3 lg:text-3xl font-bold'>Hey, I'm Ravikiran Jangir</p>
                <p className='text-3xl lg:text-5xl font-extrabold font-mono text-blue-700'>{text}</p>
                <p>I am a full stack developer with a passion for building scalable and user-friendly web applications. I love to create elegant solutions to complex problems.</p>
                <div className='flex flex-wrap justify-center gap-5'>
                  <a href='#projects' className='bg-slate-200 dark:bg-slate-800 py-1.5 px-6 rounded-full'>Projects</a>
                  <a href='#skills' className='bg-gray-200 dark:bg-slate-800 py-1.5 px-6 rounded-full'>Skills</a>
                  <a href='https://drive.google.com/file/d/1ACVO9Gj4_NRPAqeVFjhN4KUzTOib5EDD/view?usp=sharing' target='_blank' className='bg-gray-200 dark:bg-slate-800 py-1.5 px-6 rounded-full'>Resume</a>
              
                </div>
            </div>
            
        </div>

        {/* Projects */}
        <div className='w-9/12  mx-auto lg:mt-3 flex flex-col pt-24' id='projects'>
            <h1 className=' text-3xl font-semibold font-sans tracking-wider mb-10'>Projects</h1>
            <Card/>
        </div>

        

        {/* Skills */}
        <div className='w-9/12 mx-auto lg:mt-10 mb-10 flex flex-col pt-24' id='skills'>
          <h1 className=' text-3xl font-sans tracking-wider mb-10'>What I know</h1>
          <Skills/>
        </div>
      
        {/* contact */}
        <div className='w-9/12 mx-auto mt-5 lg:mt-32 mb-7 flex flex-col ' id='contact'>  
          <Contact/>
        </div>
        
      </section>
    </div>
    
  )
}

export default Navbar