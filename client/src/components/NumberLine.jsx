import { useState } from 'react'
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { TbLayoutBottombarCollapseFilled } from 'react-icons/tb';
import { motion } from 'motion/react';

function Arrow({ direction }) {
  if (direction == 'l')
    return (
      <div className='text-slate-500 flex justify-end translate-x-1 items-center'>
        <BiSolidLeftArrow />
        <div className='absolute bg-slate-500 h-0.5 w-4 translate-x-3'/>
      </div>
    )
  else 
    return (
      <div className='text-slate-500 flex justify-start -translate-x-1'>
        <BiSolidRightArrow />
      </div>
    )
}

export default function NumberLine({ curNumber, highlight }) {
  const [numbers, setNumbers] = useState([...Array(21).keys()].map((v) => v - 10));
  
  return (
    <div className="mt-6 mb-8">
      {/* <div className='grid grid-cols-23'>
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
      </div> */}
      <div className='flex items-center'>
        <Arrow direction='l' />
        <div className='grow grid grid-cols-21 h-3.5 ml-4'>
          { numbers.map((x, i) => { 
            let bgClass = '';
            if (highlight && highlight[i] == 1) {
              bgClass = 'bg-primary-400';
            } else if (highlight && highlight[i] == 2) {
              bgClass = 'bg-secondary-600';
            }
            return (
              <div key={x} className={`relative border-l-[2px] border-slate-500 flex items-center justify-center ${bgClass}`}>
                <div className='h-0.5 bg-slate-500 w-full' />
                <div className={`absolute text-slate-500 text-sm ${(x != '-10') ? '-translate-x-3 lg:-translate-x-6' : '-translate-x-3 lg:-translate-x-6'} translate-y-[18px]`}>{ x }</div>
                { (curNumber != undefined && curNumber == x) ? <motion.div layoutId='curNumber' className='absolute rounded-full bg-primary-500 w-[2vw] h-[2vw] md:w-3 md:h-3 left-0 -translate-x-[55%]' /> : null } 
              </div>
            )
            })} 
        </div>
        <Arrow direction='r' />
      </div>
    </div>
  )
}