import React from 'react'

const Stripe = ({val,last,index}) => {
  return (
    <div className={index != last?`w-1/6 px-6 py-3 flex items-center justify-between border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-600 max-[600px]:w-1/3 flex-shrink-0 flex-wrap`:`w-1/6 px-6 py-3 flex items-center justify-between border-t-[1px] border-b-[1px]   border-zinc-600  max-[600px]:w-1/3 flex-shrink-0 flex-wrap`}>
      <img src={val.url} alt="" />
      <span className='font-semibold'>{val.number}</span>

    </div>
  )
}

export default Stripe