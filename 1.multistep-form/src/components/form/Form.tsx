import { useFormContext } from '../../hooks/useFormContext'

export function Form () {
  const { data, handleSubmit, formViews, nextPage, prevPage, page, disableNext, disablePrev } = useFormContext()
  const debug = true

  return (
    <>
      {debug && <div className='debug__info'>
        <pre>
          {JSON.stringify(data, null, 1)}
        </pre>
      </div>}
      <form noValidate>
        {formViews[page]}
      </form>
      {page}
      <button onClick={handleSubmit}>Show data</button>
      <button onClick={nextPage} disabled = {disableNext} >+1</button>
      <button onClick={prevPage} disabled = {disablePrev} >-1</button>
    </>
  )
}
