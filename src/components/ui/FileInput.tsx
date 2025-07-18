type FileInputProps = {
  label: string
  name: string
  onChange: (file: File | null) => void
  className?: string
}

const FileInput = ({ label, name, onChange, className = '' }: FileInputProps) => {
  return (
    <div className={className}>
      <label htmlFor={name} className="block mb-1 font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type="file"
        className="w-full border px-3 py-2 rounded"
        onChange={(e) => onChange(e.target.files?.[0] || null)}
      />
    </div>
  )
}

export default FileInput
