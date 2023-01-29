import './App.css'
import Authentication from './components/Authentication';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home'
import OrganizationList from './components/organiztion';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import React, { useState,useEffect } from "react";
import Donate from './components/Donate';
import Signup from './components/Signup';
import MediaQuery from 'react-responsive';

function App() {
  const [lists,setlist]=useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(()=>{
    fetch('https://api.npoint.io/01b09628cc4c55f6371d/data/')
    .then(res =>res.json())
    .then(data =>setlist(data))
  },[])

  function handleSearchLoc(search){
    setlist((transaction)=>{
      return transaction.filter((list)=>{
        return list.city.toLowerCase().includes(search)
         
      })
    })
  }
  
  function handleSearchCat(search){
    setlist((transaction)=>{
      return transaction.filter((list)=>{
        return list.category.toLowerCase().includes(search)
         
      })
    })
  }

  return (
   <div>
      <BrowserRouter>
            <NavBar
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}/>
              <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/organiztion' element={
                <MediaQuery minWidth={500}>
                <OrganizationList 
                lists={lists}
                 handleSearchCat={handleSearchCat}
                 handleSearchLoc={handleSearchLoc} />
                 </MediaQuery>}></Route>
                <Route path='/about' element={
                  <MediaQuery minWidth={500}>
                <About />
                </MediaQuery>}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/donate' element={<Donate lists={lists}/>}></Route>
                <Route path='/signup' element={<Signup 
                setIsLoggedIn={setIsLoggedIn}/>}></Route>
                
                <Route path='/login' element={<Authentication/>}></Route>
              </Routes>
              <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;