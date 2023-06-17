import React from 'react'
import ReactDOM from "react-dom/client";

// import "./08-useReducer/intro-reducer";
/* +++++++++++++++++++++++++++++++++++
Implementación del Router con
createBwrowser router
import { createBrowserRouter , RouterProvider , } from "react-router-dom";

const router = createBrowserRouter ( [
      {
            path : "/" ,
            element : <MainApp/> ,
      } ,
] );

ReactDOM.createRoot ( document.getElementById ( 'root' ) ).render (
// <React.StrictMode>
    <RouterProvider router={ router }/>
//</React.StrictMode>
)
++++++++++++++++++++++++++++++++++++*/

/* +++++++++++++++++++++++++++++++++++
Implementacion Router con Browser Router

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    RESTO DE APLICACIÓN
// </BrowserRouter>,
// root
// );

++++++++++++++++++++++++++++++++++++*/
import './scss/styles.css'
import MultipleCustomHooks from "./03-Examples/MultipleCustomHooks.jsx";


ReactDOM.createRoot ( document.getElementById ( 'root' ) ).render (
// <React.StrictMode>
// {/*<HooksApp/>*/}
// {/*<CounterWithCustomHook/>*/}

// UseEffect Components
// {/*<SimpleForm/>*/}
// {/*<FormWithCustomHook/>*/}
    <MultipleCustomHooks/>
// <LifeCycle/>

// <FocusScreen/>
// <CopyApp/>
// <Scroll/>
// <RenderApp/>
// <Loading/>
//useLayout
// <Layout/>
//useMemo
// <Memorize/>
// <MemoHook/>

// <CallbackHook/>
// <MainApp/>
//Tarea
// <Padre/>

//UseReducer
    /* +++++++++++++++++++++++++++++++++++
    Aplicación de Notas
    ++++++++++++++++++++++++++++++++++++*/
    // <ToDoApp/>

//    useContext
    /* +++++++++++++++++++++++++++++++++++
    Implementación del Router
    ++++++++++++++++++++++++++++++++++++*/
    // <BrowserRouter>
    //       <MainApp/>
    // </BrowserRouter>

//{/*</React.StrictMode>*/}
)
