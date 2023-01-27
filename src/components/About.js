import React from "react";
import './About.css';
import { Link } from "react-router-dom";
function About(){
  return (
    <div>
      <div className="img-a">
        <div className="card-header">
          <br></br>
          <br></br>
          <br></br>
          <h1><strong>ABOUT US</strong></h1>
        </div>
      </div>
      {/* <center><h1>About Us</h1></center>  */}
      <div className="para">
        <center>
        <p><strong>Our charity organization, <em>By Graces</em>, has a rich history of serving the community and making a positive impact in the lives of those in need. Founded over 100 years ago, XYZ has always been dedicated to improving the lives of those less fortunate by providing essential services such as food, housing, and medical assistance.<br></br>
          <br></br>Through the years, we have adapted to the changing needs of the community and have expanded our services to include education and job training programs, as well as mental health support. We believe that by providing a comprehensive approach to addressing poverty, we can truly make a lasting difference in the lives of those we serve.<br></br>
          <br></br>Our dedicated team of staff and volunteers work tirelessly to ensure that our programs are effective and that the needs of the community are met. We are proud of the impact that we have made over the years and are committed to continuing our mission for many years to come.
            If you are interested in joining our cause and making a difference in the lives of those in need, we welcome you to get involved. We are always in need of volunteers and donations to support our programs and services.</strong>
        </p>
        <p >Together, we can make a brighter future for those in our community.</p>
        <button className="btn btn-outline-warning" type="submit" >
            <Link className= "navbar-brand" to="/donate">Donate</Link>
        </button>
        </center>
      </div>
    </div>
  )
}
export default About