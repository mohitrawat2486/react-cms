type Option = {
  label: string
  value: string
}

type SelectInputProps = {
  label: string
  name: string
  value: string
  onChange: (value: string) => void
  options: Option[]
  className?: string
}

const SelectInput = ({
  label,
  name,
  value,
  onChange,
  options,
  className = '',
}: SelectInputProps) => {
  return (
    <div className={className}>
      <label htmlFor={name} className="block mb-1 font-medium">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border px-3 py-2 rounded"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectInput
