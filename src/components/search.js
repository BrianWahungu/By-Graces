import React,{useState} from "react";

function Search({handleSearchLoc,handleSearchCat}){
    const [search,setSearch]=useState('')
    function handleChange(e){
        setSearch(e.target.value.toLowerCase())
        handleSearchLoc(search)
    }
    function handleCat(e){
        setSearch(e.target.value.toLowerCase())
        handleSearchCat(search)
    }
    return(
        <form className="searchform">
            <input
            onChange={handleChange}
            type="text"
            placeholder="city"
            />
             <input
            onChange={handleCat}
            type="text"
            placeholder="category"
            />
            
        </form>
    )

}
export default Search