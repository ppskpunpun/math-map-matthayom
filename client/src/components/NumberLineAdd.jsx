import { useState, useEffect, useRef } from 'react';
import NumberLine from "./NumberLine";
import Select from './Select';

export default function NumberLineAdd() {
  const [numbers] = useState([...Array(11).keys()].map((v) => v - 5));
  const [a, setA] = useState(0);
  const [b, setB] = useState(0); 
  const [highlight, setHighlight] = useState([...Array(21).fill(0)]);
  

  useEffect(() => {
    // algorithm by OHM hobby
    // thank you :)
    let h = [...Array(21).fill(0)];
    let s = (a+b) < 0 ? 9 : (a+b) > 0 ?  10 : (a > 0) ?  10 : 9;
    let ss =  s + (b*a > 0 ? a: (Math.abs(a) >= Math.abs(b)) ? ((a>b) ? a-1:a+1):a);
    
    for (let i=0; i!=a; i+=Math.sign(a)) h[s + i] = 1;
    for (let i=0; i!=b; i+=Math.sign(b)) h[ss + i ] = 2;

    setHighlight(h);
  }, [a, b]);

  return (
    <div className='border-2 border-slate-200'>
      <div className='pt-2 px-4 flex gap-4 items-center text-slate-700'>
        <Select className='bg-primary-400' defaultIdx={5} onChange={(e) => setA(parseInt(e.target.value))} options={numbers} />
        <div className='text-xl font-bold'>+</div>
        <Select className='bg-secondary-600' defaultIdx={5} onChange={(e) => setB(parseInt(e.target.value))} options={numbers} />
        <div className='text-xl font-bold'>{'='}</div>
        <div className='text-xl font-bold'>{a + b}</div>
      </div> 
      <NumberLine curNumber={a + b} highlight={highlight} />
    </div>
  );
}
