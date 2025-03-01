export default function InputField({ placeholder, onChange, type='text' }) {
  return (
    <input className='bg-gray-200 px-4 py-2' type={type} placeholder={placeholder} onChange={onChange} />
  )
}