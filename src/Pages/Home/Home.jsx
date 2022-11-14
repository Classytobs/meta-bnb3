import React from 'react'
import Frame3 from '../../Components/Frame3/Frame3';
import Footer from '../../Components/Footer/Footer';
import Frame1 from '../../Components/Frame1/Frame1';
import Frame2 from '../../Components/Frame2/Frame2';
import Frame4 from '../../Components/Frame4/Frame4';
import Navbar from '../../Components/Navbar/Navbar';

export default function Home() {
  return (
    <div>
        <Navbar />
        <Frame1 />
        <Frame2 />
        <Frame3 />
        <Frame4 />
        <Footer /> 
    </div>
  )
}
