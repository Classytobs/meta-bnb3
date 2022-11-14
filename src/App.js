
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Places from './Pages/Places/Places';
import React, { useState } from 'react';

function App() {
  // const [modal, setModal] = useState("flase");

//  const handleModal = () => {
//     modal ? setModal(true) : setModal(false) 
//   }

  // {modal === "wallet-active" && (
  //   <Wallet setModal={setModal} />
  // )}
  
    return (
      <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/place-to-stay" element={<Places />} />
        </Routes>
        </div> 
      </BrowserRouter>
    );
}

export default App;
