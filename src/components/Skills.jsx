import React from 'react'
import { FaCss3, FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandRedux } from "react-icons/tb";

const frontend = [
    {
        name: "HTML",
        icon: <FaHtml5 />,
        className: "text-[#FF5733]"
    },
    {
        name: "CSS",
        icon: <SiCss3 />,
        className: "text-[#264de4]",
    },
    {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        className: "text-[#264de4]",
    },
    {
        name: "Javascript",
        icon: <IoLogoJavascript />,
        className: "text-[#f0db4f]",
    },
    {
        name: "React js",
        icon: <FaReact />,
        className: "text-[#61DBFB]",
    },
    {
        name: "Redux",
        icon: <TbBrandRedux />,
        className: "text-[#764abc]",
    },
];



const backend = [
    {
        name: "Node js",
    },
    {
        name: "Express js",
    },
];

const Database = [
    {
        name: "MySql",
    },
    {
        name: "MongoDB",
    },
];

const others = [
    {
        name: "Git",
    },
    {
        name: "Git Hub",
    },
    {
        name: "Postman",
    },
    {
        name: "Git",
    },
]

const Skills = () => {
  return (
    <div className='flex flex-wrap gap-10 justify-between'>
            {/* Frontend */}
            <div className='py-5 px-6 rounded-lg bg-gradient-to-br from-[#f5e9e9]  to-[#fcfcfc] w-[230px] '>
            <p className='font-mono font-bold text-xl mb-2'>Frontend</p>
            {frontend.map((tech, index) => (
                <div key={index} className='flex items-center gap-x-3 py-2 text-[17px] font-mono font-semibold '>
                    <span className={tech.className} style={{ fontSize: '24px' }} >{tech.icon}</span> 
                    <span>{tech.name}</span>
                </div>
            ))}
            </div>

            {/* backend */}
            <div className='py-5 px-6 rounded-lg bg-gradient-to-br from-[#f5e9e9]  to-[#fcfcfc] w-[230px] '>
            <p className='font-mono font-bold text-xl mb-2'>Backend</p>
            {backend.map((tech, index) => (
                <div key={index} className='flex items-center gap-x-3 py-2 text-[17px] font-mono font-semibold '>
                    <span className={tech.className} style={{ fontSize: '24px' }} >{tech.icon}</span> 
                    <span>{tech.name}</span>
                </div>
            ))}
            </div>

            {/* database */}
            <div className='py-5 px-6 rounded-lg bg-gradient-to-br from-[#f5e9e9]  to-[#fcfcfc] w-[230px] '>
            <p className='font-mono font-bold text-xl mb-2'>Database</p>
            {Database.map((tech, index) => (
                <div key={index} className='flex items-center gap-x-3 py-2 text-[17px] font-mono font-semibold '>
                    <span className={tech.className} style={{ fontSize: '24px' }} >{tech.icon}</span> 
                    <span>{tech.name}</span>
                </div>
            ))}
            </div>

            {/* others */}
            <div className='py-5 px-6 rounded-lg bg-gradient-to-br from-[#f5e9e9]  to-[#fcfcfc] w-[230px] '>
            <p className='font-mono font-bold text-xl mb-2'>Other Tech</p>
            {others.map((tech, index) => (
                <div key={index} className='flex items-center gap-x-3 py-2 text-[17px] font-mono font-semibold '>
                    <span className={tech.className} style={{ fontSize: '24px' }} >{tech.icon}</span> 
                    <span>{tech.name}</span>
                </div>
            ))}
            </div>
        </div>
  )
}

export default Skills