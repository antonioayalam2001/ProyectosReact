import { FormWrapper } from "./FormWrapper";

export const UserForm = ( { username , lastName , name , update } ) => {
      console.log ( username )
      return (
          <>
                <FormWrapper title={ 'User Information' }>
                      <div className={ 'input__container' }>
                            <input value={ username } id={ 'username' } type="text" name={ 'username' } required onChange={ update }/>
                            <label htmlFor={ 'username' }>Username</label>
                      </div>
                      <div className={ 'input__container' }>
                            <input id={ 'lastName' } type="text" name={ 'lastName' } required value={ lastName } onChange={ update }/>
                            <label htmlFor={ 'lastName' }>Last Name</label>
                      </div>
                      <div className={ 'input__container' }>
                            <input id={ 'name' } type="text" name={ 'name' } required value={ name } onChange={ update }/>
                            <label htmlFor={ 'name' }>Name</label>
                      </div>
                </FormWrapper>
          </>
      )
}