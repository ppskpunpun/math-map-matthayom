export default function SectionCard({ children, className }) {
  return (
    <section className={`border border-gray-200 shadow-xs p-4 rounded-md w-full ${className}`}>
      { children }
    </section>
  )
}
