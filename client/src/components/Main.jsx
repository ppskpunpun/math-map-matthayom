export default function Main({ children, className }) {
  return (
    <main className={"mx-auto p-2 w-screen sm:w-[640px] lg:w-[1024px] " + className}>
      { children }
    </main>
  )
}
