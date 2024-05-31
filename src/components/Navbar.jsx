import React, { useState } from 'react'
import { IoMailOutline } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import banner from "../assets/banner.jpg"
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Card from './ProjectCard';
import Skills from './Skills';

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
    <div className='fixed top-0 right-0 left-0 mx-auto w-full flex items-center justify-between bg-[#cfd5ff] dark:bg-richblack-800 dark:text-richblack-5 h-16 z-10'>
        <nav className='flex items-center justify-between w-10/12 mx-auto'>
        <div className=' '>
          <div className='flex gap-x-6'>
            {Navlinks.map((link, i) => (
              <a key={i} href={`#${link.linkto}`} className='text-lg font-semibold cursor-pointer'>
                {link.title}
              </a>
            ))}
          </div>
        </div>
        <div className='flex gap-x-6 items-center'>
          <div className='flex gap-2 bg-slate-300 px-2 cursor-pointer py-1'>
            <p>Get in Touch</p>
            <IoMailOutline size={24} />
          </div>
          <button onClick={toggleDarkMode} className='w-16 h-16 cursor-pointer'>
            {darkMode ? <MdOutlineLightMode size={24} /> : <MdDarkMode size={24} />}
          </button>
        </div>
        </nav>
      </div>
      

    {/* main section */}
    <section id='home'  className='relative  min-h-[calc(100vh-64px)] py-32 bg-custom-gradient dark:bg-dark-custom-gradient dark:text-richblack-5 flex flex-col'>
        {/* About  */}
        <div className='w-9/12 my-[85px] mx-auto flex flex-col lg:flex-row justify-between  '>
            <div className='w-[48%]'>
                <img
                    src={banner}
                    className='rounded-md '
                />
            </div>
            <div className='flex flex-col w-[48%] justify-center gap-y-5'>
                <p className='text-3xl font-bold'>Hey, I'm Ravikiran Jangir</p>
                <p className='text-5xl font-bold font-mono text-[#1A80E5]'>{text}</p>
                <p>I am a full stack developer with a passion for building scalable and user-friendly web applications. I love to create elegant solutions to complex problems.</p>
            </div>
        </div>

        {/* Projects */}
        <div className='w-9/12 mx-auto mt-20 flex flex-col ' id='projects'>
            <h1 className=' text-3xl font-bold font-sans tracking-wider mb-10'>Projects</h1>
            <Card/>
        </div>

        {/* Skills */}
        <div className='w-9/12 mx-auto mt-32 mb-10 flex flex-col ' id='skills'>
          <h1 className=' text-3xl font-bold font-sans tracking-wider mb-16'>What I know</h1>
          <Skills/>
        </div>
    </section>
    </div>
    
  )
}

export default Navbar