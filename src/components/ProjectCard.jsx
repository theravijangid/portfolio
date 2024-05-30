import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import {Autoplay, FreeMode, Pagination} from "swiper/modules"
import {projectDetails} from "../data/projects"
import { GoArrowUpRight } from "react-icons/go";

import React from 'react'

const Card = () => {
  return (
    <div>
        <div>
            <Swiper
                slidesPerView={3}
                spaceBetween={60}
                loop={true}
                freeMode={true}
                autoplay={{
                    delay: 3500,
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}

                className="w-full"
            >
                {   
                    projectDetails.map( (data, index) => {
                        return (
                        <SwiperSlide key={index}>
                        <div className="rounded-lg w-[370px] mb-2 ">
                           <img src={data.image} className="w-[370px] " alt={data.title}/>
                            <div className="dark:bg-richblack-800 bg-richblack-5 min-h-[250px] py-3 px-3 space-y-3">
                                <p className="text-2xl font-bold font-sans">{data.title}</p>
                                <div className="flex gap-7 underline">
                                    <a href={data.git} target="_blank" rel="noopener noreferrer" className="flex items-center">GitHub <GoArrowUpRight/> </a>
                                    <a href={data.live} target="_blank" rel="noopener noreferrer" className="flex items-center">Live <GoArrowUpRight/></a>   
                                </div>
                                <p className="text-base font-thin pb-3">{data.desc}</p>
                            </div>

                        </div>
                        </SwiperSlide>
                        )
                })
                }
            </Swiper>
        </div>
    </div>
  )
}

export default Card