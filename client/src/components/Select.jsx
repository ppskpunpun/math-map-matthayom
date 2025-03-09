export default function Select({ options, onChange, defaultIdx }) {
  return (
    <select defaultValue={options[defaultIdx]} className='border-1 border-slate-300 rounded-md text-slate-700' onChange={onChange}>
      { options.map((x, i) => <option key={x} value={x}>{ x }</option>)}
    </select>
  )
}