export default function P({children, className, mb='mb-4'}) {
  return (
    <p className={`${className} text-slate-500 text-md ${mb}`}>{ children }</p>
  )
}