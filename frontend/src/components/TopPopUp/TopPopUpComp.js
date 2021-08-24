import React , {useState} from 'react'
import './TopPopUpCompStyle.css'

export let showTopPopUp;

export default function TopPopUpComp() {


    const [checkBoxChecked,setCheckBoxChecked] = useState(false)
    const [content,setContent] = useState("")


    showTopPopUp = (msg='',timer=2500) => {
        console.log("Timer: "+ timer)
        setCheckBoxChecked(true);
        setContent(msg);
        setTimeout(() => {
            setCheckBoxChecked(false);
        }, timer);
    }

    return (
        <>
            <div id="topUp-Toggle">
                <input type="checkbox" checked={checkBoxChecked} onChange={()=>{showTopPopUp(!checkBoxChecked)}}/>
            <ul id="top-popup-wrapper">
                <div > {content} </div>
            </ul>
            </div>
        </>
    )
}
