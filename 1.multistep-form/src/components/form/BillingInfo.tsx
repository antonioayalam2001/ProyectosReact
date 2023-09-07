import { useFormContext } from '../../hooks/useFormContext'
import { FormInput } from './FormInput'

export function BillingInfo () {
  const { data, handleChange } = useFormContext()
  return (
    <>
      <div className='columns__2'>
        <FormInput name="billFirstName" type="text" id="billFirstName" onChange={handleChange} value={data.billFirstName} placeholder='Antonio' restrictions={{ minLength: 4, maxLength: 20, required: true }} />
        <FormInput name="billLastName" type="text" id="billLastName" onChange={handleChange} value={data.billLastName} placeholder='Antonio' restrictions={{ minLength: 4, maxLength: 20, required: true }} />
        <FormInput name="billAddress1" type="text" id="billAddress1" onChange={handleChange} value={data.billAddress1} placeholder='Antonio' restrictions={{ minLength: 4, maxLength: 20, required: true }} />
      </div>
      <div className="columns__2">
        <FormInput name="billAddress2" type="text" id="billAddress2" onChange={handleChange} value={data.billAddress2} placeholder='Antonio' restrictions={{ minLength: 4, maxLength: 20, required: true }} />
        <FormInput name="billZipCode" type="text" id="billZipCode" onChange={handleChange} value={data.billZipCode} placeholder='Antonio' restrictions={{ maxLength: 4, required: true }} />
      </div>
    </>
  )
}
