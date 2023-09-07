import { FormContext } from '../context/FormContext'
import { useContext } from 'react'

export function useFormContext () {
  const formContext = useContext(FormContext)
  return formContext
}
