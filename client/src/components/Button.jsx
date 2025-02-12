export default function Button({ children, variant='', onClick, }) {
  const btnClass = "flex items-center justify-center hover:cursor-pointer transition-all duration-300"

  const variants = {
    regular_primary: 'w-25 h-10 rounded-sm hover:rounded-4xl bg-primary-500 hover:bg-primary-500 text-slate-700',
    outline_primary: 'w-25 h-10 rounded-sm hover:rounded-4xl hover:bg-primary-500 text-primary-500 hover:text-slate-100 border-primary-500 border-2',
    circle: 'w-10 h-10 bg-slate-300',
  }
  
  return (
    <button 
      onClick={onClick} 
      className={ `${btnClass} ${(variants === '') ? variants["regular_primary"] : variants[variant]}` }
    >
      { children }
    </button>
  )
}

