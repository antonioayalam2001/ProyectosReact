import { useState } from "react";

export const useForm = ( formStep = [] ) => {

      const [ step , setStep ] = useState ( 0 )

      const nextStep = () => {
            setStep ( ( step ) => {
                  if ( step >= formStep.length -1 ) return step;
                  return step + 1;
            } )
      };

      const prevStep = () => {
            setStep ( ( step ) => {
                  if ( step <= 0 ) return step;
                  return step - 1;
            } )
      };

      return {
            step ,
            prevStep ,
            nextStep ,
            formStep : formStep[ step ],
            isFirstStep: step === 0,
            isLastStep: step === formStep.length-1
      }
}