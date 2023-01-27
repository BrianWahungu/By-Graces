import React,{useState,useEffect} from "react";
import './org.css';
import Search from "./search";
import SelectedCharity from "./organization";
function OrganizationList({lists,handleSearchLoc,handleSearchCat}){
  const [selectedCharity, setSelectedCharity] = useState(null);
  const [showCharity, setShowCharity] = useState(false);
  useEffect(()=>{
    if(selectedCharity){
        <SelectedCharity/>
    }
  },[selectedCharity])
  function handleClick(list) {
    setSelectedCharity(list);
    setShowCharity(true);
  }
  function handleBack() {
    setShowCharity(false);
  }
 if(showCharity){
  return(
    <SelectedCharity
    selectedCharity={selectedCharity}
    onBack={handleBack}/>
  )
 }else{
  return(
        <div>
          <div className="search">
          <Search handleSearchLoc={handleSearchLoc}
          handleSearchCat={handleSearchCat}/>
          </div>
<table className="table">
  <thead>
    <tr>
      <th scope="col">STATE</th>
       <th scope="col">CITY</th>
      <th scope="col">NAME OF CHARITY</th>
      <th scope="col">CATEGORY</th>
      <th scope="col">URL</th>
      <th scope="col">DONATE</th>
    </tr>
  </thead>
  <tbody>
    {lists.map(list=>{
  return(
    <tr key={list.ein}>
      <td>{list.state}</td>
      <td>{list.city}</td>
      <td onClick={() => handleClick(list)}>{list.charityName}</td>
      <td>{list.category}</td>
      <td><a href={list.url}>Link to Site</a></td>
      <td><a href={list.donationUrl}>Donate</a></td>
    </tr>
   )})}
  </tbody>
</table>
{/* {selectedCharity?(
<SelectedCharity selectedCharity={selectedCharity} />
):(
  <p>Click on a charity to view more details</p>
)} */}
        </div>
    )
}
}
export default OrganizationList