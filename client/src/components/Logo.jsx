import MMM from '../assets/MMM1.svg'

export default function Logo() {
  return (
    <div className="h-0">
      <img className="w-16 -translate-y-8" src={MMM} />
    </div>
  )

  return (
    <div className="font-bold text-4xl flex gap-2">
      <span className="text-primary-500">M</span>
      <span className="text-accent-1">M</span>
      <span className="text-secondary-500">M</span>
    </div>
  )
}