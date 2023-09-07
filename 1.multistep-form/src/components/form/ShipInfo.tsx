import { useFormContext } from '../../hooks/useFormContext'
import { FormInput } from './FormInput'

export function ShipInfo () {
  const { data, handleChange } = useFormContext()
  return (
      <>
        <FormInput name="sameAsBilling" type="checkbox" id="sameAsBilling" onChange={handleChange} placeholder='Antonio' restrictions={{ checked: data.sameAsBilling }}/>
        <FormInput name="shipFirstName" type="text" id="shipFirstName" onChange={handleChange} value={data.shipFirstName} placeholder='Antonio' restrictions={{ minLength: 4, maxLength: 20, required: false }}/>
        <FormInput name="shipLastName" type="text" id="shipLastName" onChange={handleChange} value={data.shipLastName} placeholder='Antonio' restrictions={{ minLength: 4, maxLength: 20, required: false }}/>
        <FormInput name="shipAddress1" type="text" id="shipAddress1" onChange={handleChange} value={data.shipAddress1} placeholder='Antonio' restrictions={{ minLength: 4, maxLength: 20, required: false }}/>
        <FormInput name="shipAddress2" type="text" id="shipAddress2" onChange={handleChange} value={data.shipAddress2} placeholder='Antonio' restrictions={{ minLength: 4, maxLength: 20, required: false }}/>
        <FormInput name="shipZipCode" type="text" id="shipZipCode" onChange={handleChange} value={data.shipZipCode} placeholder='Antonio' restrictions={{ maxLength: 4, required: false }}/>
      </>
  )
}
