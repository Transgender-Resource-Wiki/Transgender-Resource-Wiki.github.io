import { useState, useEffect } from "react";
import '../styles/ColoredSideBars.css';
import '../styles/Hamburger.css';
import '../styles/SiteNavBackground.css';

export default function SiteNav(){
    const [toggled, setToggled] = useState(false)
    
    useEffect(() => {
        const siteMapDiv = document.getElementById('site-map-div');
        const siteMapP = document.getElementById('site-map-p');
        const siteMapUl = document.getElementById('site-map-ul');
        if (siteMapDiv) {
            siteMapDiv.className = toggled ? 'scroll-area-mobile' : 'scroll-area';
        }
        if (siteMapP) {
            siteMapP.className = toggled ? 'paragraph-mobile' : 'paragraph';
        }
        if (siteMapUl) {
            siteMapUl.className = toggled ? 'link-list-mobile' : 'link-list';
        }
    }, [toggled]);

    return (

        <html>
          <div className="left-blue"></div>
          <div className="left-pink"></div>
          <div className="center-white"></div>
          <div className="right-pink"></div>
          <div className="right-blue"></div>
          <div className="horz-dark-blue-0"></div>
          <div className="horz-dark-blue-1"></div>
        
          {toggled && (
          <span>
            <div className="bg-block"></div>
            <div className="bg-site-block"></div>
            <div className="bg-darken"></div>
          </span>
          )}
    

          <div onClick={() => setToggled(prevToggle => !prevToggle)} className="hamburger">
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
          </div>
        </html>
    )
}