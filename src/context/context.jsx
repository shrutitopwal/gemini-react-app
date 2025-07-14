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





import {createContext,useState} from "react";
import runChat from "../config/gemini";


export const Context=createContext();
const ContextProvider=(props)=>{

    const [input,setInput]=useState("");
    const [recentPrompt,setRecentPrompt]=useState("");
    const [prevPrompts,setPrevPrompts]=useState([]);
    const [showResult,setShowResult]=useState(false);
    const [loading,setLoading]=useState(false);
    const [resultData,setResultData]=useState("");
    


    const onSent=async (prompt)=>{

        setResultData("")
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)
        const response=await runChat(input)
        setResultData(response)
        setLoading(false)
        setInput("")
    }

   // onSent("what is react js")
    const contextValue={
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput

    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider