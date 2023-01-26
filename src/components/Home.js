import React from 'react';
import './Home.css';
import child from './images/child.jpg'
import medical from './images/medical.jpg'
import poverty from './images/pov.jpg'
import { Link } from "react-router-dom";

function Home(){
 return(
    <div>

         <div className='head'>
             <h1 className='main'>By Graces</h1>
            <center> <p className='main'><em>"The best way to find yourself is to loss yourself in the service of others"</em></p></center>
         </div>

         <div>
          <center className='name'>
       <strong className='n1'>By Graces</strong>
       <strong className='n2'>Charity Organisations</strong>
       </center>
         </div>

         <div className='flex-x'>
           <img src={child} alt='child in class' className='inp'/>
           <p className='p3'><strong>In the field of education, we provide scholarships for underprivileged children and young adults, as well as support for schools and educational programs in low-income communities. We believe that education is the key to breaking the cycle of poverty and providing children with the tools they need to succeed in life.</strong></p> 
           </div>
        <div className='flex-y'>   

          <div className='p-y'>
            <p><strong>In the field of healthcare, we provide medical assistance and support to those who cannot afford it. We also run programs to promote health education, disease prevention and healthy living. Our goal is to ensure that everyone has access to the healthcare they need to lead a healthy and fulfilling life.</strong> </p> 
              </div>

          <div className="img-2">
            <img src={medical} alt='doctor' className='inpq' />
          </div>       
            
        </div>
        
        <div className='flex-x'>
            <img src={poverty} alt='poverty' className='inp'/>
            <p className='p3'><strong>In poverty reduction, we provide basic needs assistance such as food, clothing, and shelter for those experiencing poverty. We also work with local organizations and government agencies to help those in need find long-term solutions to poverty.</strong></p>
        </div>
     <div className='p4'>
        <p>Our organization is run by a dedicated team of volunteers and staff who are committed to making a real difference in the lives of those we serve. We partner with other organizations and individuals to maximize the impact of our efforts and ensure that every dollar donated goes directly to those in need.</p>
        <p>If you would like to help us in our mission, you can donate to our organization, volunteer your time and skills, or simply spread the word about our organization. Together, we can make a real difference in the world.</p>
           
</div>
        <div className="bp" >
          <center>
            <button id='donate' type="button" class="btn btn-outline-dark"><Link to="/donate"></Link>DONATE</button>
            <p id="pb"><strong><em>Thank you for visiting our website and for your support.</em></strong></p>
         </center>
         </div>
    </div>
 )
}

export default Home;