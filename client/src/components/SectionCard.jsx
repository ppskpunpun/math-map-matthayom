export default function SectionCard({ children, className }) {
  return (
    <section className={`${className} bg-white border border-gray-200 shadow-xs p-4 rounded-md w-full`}>
      { children }
    </section>
  )
}
