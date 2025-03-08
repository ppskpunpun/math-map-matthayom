import H2 from "./H2"

function ContentLink({children, scrollTo}) {
  return (
    <li>
      <button onClick={() => scrollTo.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })} className="text-md text-slate-700 bg-primary-400 hover:underline hover:cursor-pointer px-2 py-0.5 rounded-sm">{children}</button>
    </li>
  )
}

export default function TOC({ contents }) {
  // contents = [ [content title, ref to content], ... ]
  return (
    <div>
      <H2>Table of Contents</H2>
      <ol className="flex flex-col gap-2">
        { contents.map((x, i) => <ContentLink key={x[0]} scrollTo={x[1]}>{i+1}. {x[0]}</ContentLink>) }
      </ol>
    </div>
  )
}