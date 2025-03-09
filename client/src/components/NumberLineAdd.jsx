import { useState, useEffect, useRef } from 'react';
import NumberLine from "./NumberLine";
import Select from './Select';

export default function NumberLineAdd() {
  const [numbers] = useState([...Array(11).keys()].map((v) => v - 5));
  const [a, setA] = useState(0);
  const [b, setB] = useState(0); 

  return (
    <div className='border-2 border-slate-200'>
      <div className='pt-2 px-4 flex gap-4 items-center text-slate-700'>
        <Select defaultIdx={10} onChange={(e) => setA(parseInt(e.target.value))} options={numbers} />
        <div className='text-xl font-bold'>+</div>
        <Select defaultIdx={10} onChange={(e) => setB(parseInt(e.target.value))} options={numbers} />
        <div className='text-xl font-bold'>{'='}</div>
        <div className='text-xl font-bold'>{a + b}</div>
      </div> 
      <NumberLine curNumber={a + b} />
    </div>
  );
}
