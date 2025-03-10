export default function H2({ children, className }) {
  return (
    <h2 className={`${className} text-2xl md:text-3xl mt-4 mb-2 text-primary-500`}>{ children }</h2>
  )
}