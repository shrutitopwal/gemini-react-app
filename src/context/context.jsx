// context.jsx
/*import { createContext, useEffect } from "react";
import runChat from "../config/gemini.js";

export const Context = createContext();

export const ContextProvider = (props) => {
  useEffect(() => {
    runChat("What is React?");
  }, []);

  const contextValue = {};

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};*/





import {createContext} from "react";
import runChat from "../config/gemini";


export const Context=createContext();
const ContextProvider=(props)=>{

    const onSent=async (prompt)=>{
        await runChat(prompt)
    }

    onSent("what is react js")
    const contextValue={

    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider