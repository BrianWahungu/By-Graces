import React from 'react';
import './organization.css'
function SelectedCharity({ selectedCharity,onBack }) {
    
  return (
    
        <div>
          <center>

            <div className="org">
              <h2>{selectedCharity.charityName}</h2>
            </div>

            <div>
              <p><strong>CATEGORY:</strong> {selectedCharity.category}</p>
              <p><strong>WEBSITE:</strong> <a href={selectedCharity.url}>Here</a></p>
              <p><strong>STATE:</strong> {selectedCharity.state}</p>
              <p><strong>CITY:</strong> {selectedCharity.city}</p>
              <p>ZipCode: {selectedCharity.zipCode}</p>
              <p>Longitude: {selectedCharity.longitude}, Latitude: {selectedCharity.latitude}</p>
            {/* <p>Mission: {selectedCharity.missionStatement}</p> */}
              <button className="btn btn-outline-warning" type="submit"><a href={selectedCharity.donationUrl}>DONATE</a></button>
              <button className="btn btn-outline-dark ms-2" type="submit" onClick={onBack}>Back</button>
            </div>
                   
          </center>
        </div>
      
    
  );
}
export default SelectedCharity