import { FormWrapper } from "./FormWrapper.jsx";

export const AdressForm = ( { zipCode , city , street , update } ) => {
      return (
          <FormWrapper title={ 'User Information' }>
                <div className={ 'input__container' }>
                      <input onChange={ update } id={ 'street' } type="text" name={ 'street' } required value={ street }/>
                      <label htmlFor={ 'street' }>Street</label>
                </div>
                <div className={ 'input__container' }>
                      <input onChange={ update } id={ 'zipCode' } type="text" name={ 'zipCode' } required value={ zipCode }/>
                      <label htmlFor={ 'zipCode' }>Zip Code</label>
                </div>
                <div className={ 'input__container' }>
                      <input onChange={ update } id={ 'city' } type="text" name={ 'city' } required value={ city }/>
                      <label htmlFor={ 'city' }>City</label>
                </div>
          </FormWrapper>
      )
}