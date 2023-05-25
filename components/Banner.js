import React from 'react'
import Image from "next/image"
import bannerimage from "../pages/images/banner.webp"

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src={bannerimage} layout="fill" objectFit="cover"  alt="" />

      <div className="absolute top-1/2 w-full text-center ">
          <p className="text-sm sm:text-lg text-gray-800 font-medium ">
              Not sure where to go? Perfect
          </p>
          <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl">I'm Flexible</button>
      </div>
    </div>

  )
}

export default Banner