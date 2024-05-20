import { useState } from "react";
import '../styles/Hamburger.css';

export default function Hamburger(){
    const [toggled, setToggled] = useState(false)
    return (

        <html>
        {toggled && (<a href="/">Home</a>)}
        <div onClick={() => setToggled(prevToggle => !prevToggle)} 
             className="hamburger">
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
        </div>
        </html>
    )
}