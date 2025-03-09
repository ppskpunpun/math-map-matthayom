import { FaCircle } from "react-icons/fa";

export function List({ children, title }) {
  return (
    <>
      <p className="text-slate-500 text-md">{title}</p>
      <ul className="text-slate-500 text-md overflow-hidden mb-4">
        { children }
      </ul>
    </> 
  )
}

export function Li({ children}) {
  return (
    <li className="flex gap-2 items-center">
      {/* <FaCircle size={6}/> */}
      <div className="border-l-2 border-b-2 border-gray-400 w-4 h-6 -translate-y-3"></div>
      { children }
    </li>
  )
}