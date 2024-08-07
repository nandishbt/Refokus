import React from 'react'

function Marquee({images}) {
  return (
    <div className='flex flex-nowrap  gap-10 bg-white py-10  overflow-hidden'>
        {images.map((elem,i)=>(
            <img src={elem} alt=""  className='w-40 flex-shrink-0'/>
        ))}
    </div>
    
  )
}

export default Marquee