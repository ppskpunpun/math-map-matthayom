import MMM from '../assets/MMM2.svg';

export default function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row text-xl sm:text-2xl gap-2 sm:gap-4 lg:gap-8 items-center justify-center text-slate-500 p-4 border-t-2 border-gray-200"> 
      <img className='w-24' src={MMM}/>
      <div>"ทบทวน ฝึกฝน พัฒนา คณิตศาสตร์ไม่ใช่เรื่องยาก"</div>
    </footer>
  )
}