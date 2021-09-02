import React , {useState, useRef, useEffect} from 'react'
import './TopPopUpCompStyle.css'

export let showTopPopUp;

export default function TopPopUpComp() {


    const [checkBoxChecked,setCheckBoxChecked] = useState(false)
    const [content,setContent] = useState("")
    const isMounted = useRef(false)


    showTopPopUp = (msg='',timer=2500) => {
        console.log("Timer: "+ timer)
        setCheckBoxChecked(true);
        setContent(msg);
        
        if(isMounted.current){
            setTimeout(() => {
                setCheckBoxChecked(false);
            }, timer);
        }
    }

    useEffect(() => {
        isMounted.current = true

        return () => {
            isMounted.current = false
        }
    }, [])

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
