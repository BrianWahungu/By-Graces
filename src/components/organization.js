import React from 'react';
import './organization.css'
function SelectedCharity({ selectedCharity,onBack }) {
    
  return (
    
      
        <div>
          <h2>{selectedCharity.charityName}</h2>
          <p>Category: {selectedCharity.category}</p>
          <p>Website: <a href={selectedCharity.url}>here</a></p>
          <p>State: {selectedCharity.state}</p>
          <p>City: {selectedCharity.city}</p>
          <p>ZipCode: {selectedCharity.zipCode}</p>
          <p>Longitude: {selectedCharity.longitude}, Latitude: {selectedCharity.latitude}</p>
          {/* <p>Mission: {selectedCharity.missionStatement}</p> */}
          <p><a href={selectedCharity.donationUrl}>DONATE</a></p>
          <button onClick={onBack}>Back</button>
        </div>
      
    
  );
}
export default SelectedCharity