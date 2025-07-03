export default function Select({ className, options, onChange, defaultIdx }) {
  return (
    <select defaultValue={options[defaultIdx]} className={className + ' px-2 py-1 border-1 border-slate-300 rounded-md text-slate-700'} onChange={onChange}>
      { options.map((x, i) => <option key={x} value={x}>{ x }</option>)}
    </select>
  )
}
