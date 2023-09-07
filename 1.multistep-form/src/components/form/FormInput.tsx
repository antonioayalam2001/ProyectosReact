interface Restrictions {
  required?: boolean
  minLength?: number
  maxLength?: number
  checked?: boolean
}

interface FormInputProps {
  name: string
  type: string
  id: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
  placeholder: string
  restrictions?: Restrictions
}

export function FormInput ({ name, type, id, onChange, value, placeholder, restrictions }: FormInputProps) {
  return (
        <div className="input__text">
          <input type={type} name={name} id={id} onChange={onChange} value={value} placeholder={ placeholder} {...restrictions} />
          <label htmlFor={id}>{name}</label>
        </div>
  )
}
