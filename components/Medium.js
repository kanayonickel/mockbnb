import Image from "next/image"

function Medium({ img, title}) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
       <div className="relative h-80 w-80">
           <Image src={img} layout="fill" alt="Medium" className="rounded-xl"/>
       </div>
       <h3 className="text-gray-600 text-2xl mt-3">{title}</h3>
    </div>
  )
}

export default Medium