import React from "react";
import fb from './images/fb.png'
import insta from './images/insta.png'
import linkedin from './images/linkedin.png'
import twitter from './images/twitter.png'
import './footer.css'
function Footer(){
    return (
        <div className="main-footer">
             <div className="container main-footer-container">
             <center>
             <h3 className="name"><em>BY GRACES</em></h3>
             <p id="est">Established 2023</p>
             <p className="card-text"><a href="https://www.facebook.com/"><img src={fb} alt='fb'/></a>
                <a href="https://www.instagram.com/"><img src={insta} alt='insta'/></a>
                <a href="https://www.linkedin.com//"><img src={linkedin} alt='linkedin'/></a>
                <a href="https://twitter.com/"><img src={twitter} alt='twitter'/></a></p>
             <p id="p-f"><em>Images from pixabay by different authors</em></p>
             </center>
        </div>
        </div>
    )
}
export default Footer