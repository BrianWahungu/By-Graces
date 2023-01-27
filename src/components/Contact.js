import React from "react";
import fb from './images/fb.png';
import insta from './images/insta.png';
import linkedin from './images/linkedin.png';
import twitter from './images/twitter.png';
//import contactp from './images/contactpic.jpg';
import './Contact.css';
function Contact () {
    return (
<div className="img-p">
    {/* <div className="img-h">
        <img src={contactp} alt="..." className="img-p"/>
    </div>*/ }
    <div className="card-header">
        <br></br>
        <br></br>
        <br></br>
        <h1><strong>CONTACT US</strong></h1>
    </div>
    <br></br>
    <br></br>
    <div className="card-body">
        <h5 className="card-title">Telephone:</h5>
        <p className="card-text"><em>+254721345678 / +254722098765</em></p>
        <br></br>
        <h5 className="card-title">Email Address:</h5>
        <p className="card-text"><em>ByGracescharityorganisation@gmail.com</em></p>
        <h5 className="card-title">Location:</h5>
        <p className="card-text"><em>Head Office: 1st Floor Wellington Gables, Upperhill.</em></p>
        <p className="card-text"><em>Nairobi, Kenya</em></p>
        <h5 className="card-title">Social Handles:</h5>
        <br></br>
        <p className="card-text"><a href="https://www.facebook.com/"><img src={fb} alt='fb'/></a>
        <a href="https://www.instagram.com/"><img src={insta} alt='insta'/></a>
        <a href="https://www.linkedin.com//"><img src={linkedin} alt='linkedin'/></a>
        <a href="https://twitter.com/"><img src={twitter} alt='twitter'/></a></p>
        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
    </div>
    <div class="card-footer">
        We are reachable during <strong>normal working hours:</strong>
        <br></br>
        <br></br>
        <p><strong>Mon - Fri 8:00 a.m to 5:00 p.m</strong></p>
        <p><strong>Sat & Sun 9:00 a.m to 1:00 p.m</strong></p>
        <p><em>Closed on Public holidays</em></p>
    </div>
</div>
    )
}
export default Contact;