import './App.css'
import { Form } from './components/form/Form'
import { FormProvider } from './context/FormContext'

function App () {
  return (
    <>
      <FormProvider>
      <h1>React MultiStep Form</h1>
        <Form />
      </FormProvider>
    </>
  )
}

export default App
