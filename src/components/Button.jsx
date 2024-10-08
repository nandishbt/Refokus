import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const Button = ({name = 'Getting Started'}) => {
  return (
    <div>
        <button className='min-w-32 px-6 py-3 text-zinc-900 text-[.9vw] bg-white rounded-full flex items-center  gap-3 max-sm:text-[2vh]'>{name}
            <IoIosReturnRight />
        </button>
    </div>
  )
}

export default Button