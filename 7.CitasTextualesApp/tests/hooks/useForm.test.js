import { act , renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/index.js";

describe ( 'Tests in useForm Hook' , function () {
      const initialFormFields = { name : 'tony' , email : 'tonyayala_01@hotmail.com' }
      test ( `Must return the default information` , () => {
            const { result } = renderHook ( () => {
                  return useForm ( initialFormFields );
            } );
            const { formField , handleChange , onResetForm , ...other } = result.current;

            expect ( result.current ).toEqual ( {
                  formField : initialFormFields ,
                  name : initialFormFields.name ,
                  email : initialFormFields.email ,
                  handleChange : expect.any ( Function ) ,
                  onResetForm : expect.any ( Function ) ,
            } )
      } );
      test ( `Change the form name value` , () => {

            const { result } = renderHook ( () => {
                  return useForm ( initialFormFields );
            } );

            const { formField , handleChange , onResetForm , ...other } = result.current;

            act ( () => {
                  handleChange ( { target : { name : 'name' , value : 'Ramon' } } )
                  handleChange ( { target : { name : 'email' , value : 'ramon@hotmail.com' } } )
            } );

            expect ( result.current.name ).toBe ( 'Ramon' );
            expect ( result.current.email ).toBe ( 'ramon@hotmail.com' );

      } );

      test ( `Must reset the form value with the initial status` , () => {
            const { result } = renderHook ( () => {
                  return useForm ( initialFormFields );
            } );

            const { formField , handleChange , onResetForm , ...other } = result.current;

            act ( () => {
                  handleChange ( { target : { name : 'name' , value : 'Ramon' } } )
                  onResetForm();
            } );

            expect ( result.current ).toEqual ( {
                  formField : initialFormFields ,
                  name : initialFormFields.name ,
                  email : initialFormFields.email ,
                  handleChange : expect.any ( Function ) ,
                  onResetForm : expect.any ( Function ) ,
            } )
      } );

} );