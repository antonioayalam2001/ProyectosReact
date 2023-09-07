import React, { createContext, useEffect, useState } from 'react'
import { BillingInfo } from '../components/form/BillingInfo'
import { News } from '../components/form/News'
import { ShipInfo } from '../components/form/ShipInfo'

interface FormData {
  billFirstName: string
  billLastName: string
  billAddress1: string
  billAddress2: string
  billZipCode: string
  optInNews: boolean
  sameAsBilling: boolean
  shipFirstName: string
  shipLastName: string
  shipAddress1: string
  shipAddress2: string
  shipZipCode: string
}

const initialData: FormData = {
  billFirstName: '',
  billLastName: '',
  billAddress1: '',
  billAddress2: '',
  billZipCode: '',
  optInNews: false,
  sameAsBilling: false,
  shipFirstName: '',
  shipLastName: '',
  shipAddress1: '',
  shipAddress2: '',
  shipZipCode: ''
}

export const FormContext = createContext({
  data: initialData,
  handleSubmit: () => { },
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => { },
  page: 0,
  nextPage: () => { },
  prevPage: () => { },
  formViews: [<BillingInfo key={'contact'} />],
  disablePrev: true,
  disableNext: false
})
const formViews: JSX.Element[] = [<BillingInfo key={'billing'} />, <ShipInfo key={'ship'} />, <News key={'news'} />]

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState(initialData)
  const [page, setPage] = useState(0)

  const handleSubmit = () => {
    console.log(data)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const type = e.target.type
    const value = type === 'checkbox' ? e.target.checked : e.target.value
    const name = e.target.name
    setData({
      ...data,
      [name]: value
    })
  }

  const nextPage = () => {
    setPage(page + 1)
  }

  const prevPage = () => {
    setPage(page - 1)
  }

  useEffect(() => {
    if (data.sameAsBilling) {
      setData({
        ...data,
        shipFirstName: data.billFirstName,
        shipLastName: data.billLastName,
        shipAddress1: data.billAddress1,
        shipAddress2: data.billAddress2,
        shipZipCode: data.billZipCode
      })
    } else {
      setData({
        ...data,
        shipFirstName: '',
        shipLastName: '',
        shipAddress1: '',
        shipAddress2: '',
        shipZipCode: ''
      })
    }
  }, [data.sameAsBilling])

  const canNextPage1 = Object.keys(data)
    .filter(key => key.startsWith('bill') && key !== 'billAddress2')
    .map(key => data[key as keyof FormData])
    .every(Boolean)

  const canNextPage2 = Object.keys(data)
    .filter(key => key.startsWith('ship') && key !== 'shipAddress2')
    .map(key => data[key as keyof FormData])
    .every(Boolean)

  const disablePrev = page === 0

  const disableNext =
        (page === 0 && !canNextPage1) ||
        (page === 1 && !canNextPage2)

  return (
        <FormContext.Provider value={{ data, handleSubmit, handleChange, page, nextPage, prevPage, formViews, disablePrev, disableNext }}>
            {children}
        </FormContext.Provider>
  )
}
