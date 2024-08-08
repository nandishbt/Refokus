import React from 'react'

function Marquee({images}) {
  return (
    <div className='flex flex-nowrap  gap-10 bg-white py-10  overflow-hidden max-sm:gap-5'>
        {images.map((elem,i)=>(
            <img src={elem} alt=""  className='w-40 flex-shrink-0 max-sm:w-32'/>
        ))}
    </div>
    
  )
}

export default Marquee