import './styles.css'
import { useForm } from "./Hooks/useForm.js";
import { UserForm } from "./components/UserForm.jsx";
import { useState } from "react";
import { AdressForm } from "./components/AdressForm.jsx";


const initialData = {
      username : '' ,
      lastName : '' ,
      name : '' ,
      zipCode : '' ,
      street : '' ,
      city : '' ,
}

function App () {

      const [ data , setData ] = useState ( initialData );

      const updateFields = ( { target } ) => {
            const info = { [ target.name ] : target.value }
            setData ( prevState => {
                  return { ...prevState , ...info }
            } )
      }

      const submitForm = ( e ) => {
            e.preventDefault ();
            if(!isLastStep) return nextStep ();
            alert('finished')
      }

      const { nextStep , prevStep , formStep , step , isFirstStep , isLastStep } = useForm ( [ <UserForm  { ...data }  update={ updateFields }
      /> , <AdressForm { ...data }  update={ updateFields }/>
      ] )

      return <>
            <section className="form__section">
                  <div className="form">
                        <div className="box box1"></div>
                        <div className="box box2"></div>
                        <div className="box box3"></div>
                        <div className="boxT boxT1"></div>
                        <div className="boxT boxT2"></div>
                        <div className="boxT boxT3"></div>
                        <form className={ 'form__container' } onSubmit={ submitForm }>
                              { formStep }
                              <div className="input__controls">
                                    { !isFirstStep && <button onClick={ prevStep }>Prev</button> }
                                    { !isLastStep && <button onClick={ nextStep }>next</button> }
                                    {isLastStep && <button onClick={ submitForm }>Finish</button> }
                              </div>
                        </form>
                  </div>
            </section>
      </>
}

export default App
