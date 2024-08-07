import React from 'react'

const Footer = () => {
  return (
    <div className='mt-32 w-2/3 py-10 flex mx-auto gap-32 items-center'>
        <div className='left w-1/2 '>
        <h1 className='text-[10.5rem] font-semibold leading-none tracking-tight'>Refokus</h1>
        
        </div>




        <div className='right w-1/2 flex items-center justify-between'>
        <div className='flex flex-col w-1/3'>
            <h2 className='mb-10' >Socials</h2>
            {["Instagram", "Twitter", "linkedin", "facebook"].map((e,i)=>(
                <a className='text-zinc-500 mt-3'  href="#" key={i}>{e}</a>
            ))}
        </div>

        <div className='flex flex-col w-1/3'>
            <h2 className='mb-10' >Socials</h2>
            {["Instagram", "Twitter", "linkedin", "facebook"].map((e,i)=>(
                <a className='text-zinc-500 mt-3'  href="#" key={i}>{e}</a>
            ))}
        </div>

        <div className='w-1/3 flex flex-col justify-end'>
            <p className='text-zinc-500 mb-5 text-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptatibus autem mollitia sunt accusamus perspiciatis.</p>
            <img src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/6653351b3ab3236cb452f2f3_Frame%2048097733.svg" alt="" />
        </div>


        
        </div>

    </div>
  )
}

export default Footer