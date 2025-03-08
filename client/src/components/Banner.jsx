export default function Banner({ text }) {
  return (
    <div className="grid place-items-center w-screen h-[180px] bg-primary-500">
      <h1 className="text-center text-3xl md:text-4xl text-gray-50">{ text }</h1>
    </div>
  )
}