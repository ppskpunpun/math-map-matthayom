import { useState } from 'react'
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { TbLayoutBottombarCollapseFilled } from 'react-icons/tb';
import { motion } from 'motion/react';

function Arrow({ direction }) {
  if (direction == 'l')
    return (
      <div className='text-slate-500 flex justify-end translate-x-1'>
        <BiSolidLeftArrow />
      </div>
    )
  else 
    return (
      <div className='text-slate-500 flex justify-start -translate-x-1'>
        <BiSolidRightArrow />
      </div>
    )
}

export default function NumberLine({ curNumber }) {
  const [numbers, setNumbers] = useState([...Array(21).keys()].map((v) => v - 10));

  return (
    <div className="mt-6 mb-8">
      <div className='grid grid-cols-23'>
        <Arrow direction='l' /> 
        { numbers.map((x) => { return (
          <div key={x} className='grid place-items-center'>
            <div className='h-0.5 bg-slate-500 w-full' />
            <div className='absolute rotate-90 h-0.5 bg-slate-500 w-2' />
            <div className='absolute text-sm translate-y-5 text-slate-500'>{x}</div>
            { (curNumber != undefined && curNumber == x) ? <motion.div layoutId='curNumber' className='absolute rounded-full bg-primary-500 w-[2vw] h-[2vw] md:w-3 md:h-3' /> : null } 
          </div>
        )})}
        <Arrow direction='r' /> 
      </div>
    </div>
  )
}