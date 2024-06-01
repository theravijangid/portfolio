import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

const Contact = () => {
  return (
    <div className='text-center w-full'>
        <h1 className=' text-3xl text-center  tracking-widest mb-24'>Contact Me</h1>
        <p className='font-semibold text-3xl'>connect with me on social media.</p>
        <div className="flex flex-wrap justify-center gap-7 underline mt-14 text-xl font-normal">
            <a href="https://www.linkedin.com/in/theravijangir/" target="_blank"  className="flex items-center text-richblack-500 hover:text-richblack-900 dark:text-richblack-50 dark:hover:text-richblack-5 hover:scale-[102%]">LinkedIn <GoArrowUpRight/> </a>
            <a href="https://github.com/theravijangid" target="_blank"  className="flex items-center text-richblack-500 hover:text-richblack-900 dark:text-richblack-50 dark:hover:text-richblack-5 hover:scale-[102%]">github <GoArrowUpRight/></a>   
            <a href="https://x.com/RaviJangir993?t=3F0e2SMqu2r8406-6O15TA&s=08" target="_blank"  className="flex items-center text-richblack-500 hover:text-richblack-900 dark:text-richblack-50 dark:hover:text-richblack-5 hover:scale-[102%]">twitter <GoArrowUpRight/></a>  
            <a href="https://www.instagram.com/__ravi_jangid___/?igsh=MTZmdXc3OTZ4ZnJlYg%3D%3D" target="_blank"  className="flex items-center text-richblack-500 hover:text-richblack-900 dark:text-richblack-50 dark:hover:text-richblack-5 hover:scale-[102%]">instagram <GoArrowUpRight/></a>  
        </div>
        <div className='mt-20  lg:mt-32 text-xl text-richblack-900 dark:text-richblack-5'>
            <p>or drop a mail at <a href="mailto:ravijangir993@gmail.com" className="anchor-underline">ravijangir993@gmail.com</a></p>
        </div>

        <p className='flex flex-wrap justify-center gap-1 mt-24 lg:mt-40 text-sm'>
            website desined and developed by
            <a href="https://www.linkedin.com/in/theravijangir/" target="_blank"  className="flex items-center text-[#1A80E5]"> Ravikiran Jangir </a>
        </p>
    </div>
  )
}

export default Contact