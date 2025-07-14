import React, { useContext } from 'react'
import './Main.css'
import {assets} from '../../assets/assets'
import { Context } from '../../Context/Context'


const Main=()=>{
    
    const{onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)

    return(
        <div className='main'>
              <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon}alt=""/>
              </div>
              <div className="main-container">
                 <div className="greet">
                    <p><span>Hello,Dev.</span></p>
                    <p>How can I help you today?</p>
                 </div>
                 <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful places to see on an upcoming sunday</p>
                        <img src={assets.compass_icon} alt=""/>
                    </div>
                     <div className="card">
                        <p>Briefly summarize this concept:urban planning</p>
                        <img src={assets.bulb_icon} alt=""/>
                    </div>
                     <div className="card">
                        <p>Brainstorm team bonding activites</p>
                        <img src={assets.message_icon} alt=""/>
                    </div>
                     <div className="card">
                        <p>Improve the readabiltiy of the following code</p>
                        <img src={assets.code_icon} alt=""/>
                    </div>
                 </div>
              <div className='main-bottom'>
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)}value={input} type="text"placeholder='enter a prompt'/>
                     <div>
                        <img src={assets.gallery_icon}alt=""/>
                        <img src={assets.mic_icon}alt=""/>
                        <img onClick={()=>onSent()}src={assets.send_icon}alt=""/>
                    </div>
                        
               </div>
               <p className="bottom-info">
                Gemini may display inaccurate info,including about people, so double check.
               </p>
              </div>
            
              </div>

        </div>
    )
}
export default Main