import React from 'react'
import wall from '../images/wall.jpg'
import Navbar from '../components/Navbar';
import UpNavbar from '../components/UpNavbar';

const Landingpage = () => {
  const bgImage = {
    backgroundImage: `url(${wall})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };



  return (
    <>
    <div>
      <UpNavbar/>
    </div>
    <div>
      <Navbar />
    </div><div style={bgImage}>

      </div></>
  
  );
};

export default Landingpage;