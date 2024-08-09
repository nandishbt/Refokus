import React from 'react'
import Button from './Button'

function Product({data}) {
  return (
    <div className='w-full '>
        <div className='group relative w-2/3 flex items-center justify-between   mx-auto py-10 px-5 max-[600px]:w-full'>
         <h1 className='font-semibold capitalize text-5xl'>{data.title}</h1>
         <div className='w-1/3'>
         <p className='w-full mb-10'>{data.desc}</p>
                <div className='flex items-center gap-5  max-[600px]:flex-col'>
                        {data.btn1&&<Button name = {data.btn1} />}
                        {data.btn2&&<Button name = {data.btn2} />}
                       
                     
                </div>
         </div>

         <div className=' absolute left-[25%] h-full w-1/3 max-sm:hidden '>
         <img src={data.url} alt="" className=' w-full h-full object-cover object-center opacity-0 group-hover:opacity-100 group-hover:translate-x-10 group-hover:translate-y-10   transition-all duration-500' />
         
         
         </div>
       
        
        </div>

    </div>
  )
}

export default Product