export default function InputField({ className, placeholder, onChange, type='text', value, disabled=false }) {
  return (
    <input
      className={`${className} bg-gray-200 px-4 py-2 text-slate-700`}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      disabled={disabled}
    />
  )
}
