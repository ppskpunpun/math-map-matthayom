export default function P({children, mb='mb-4'}) {
  return (
    <p className={`text-slate-500 text-md ${mb}`}>{ children }</p>
  )
}