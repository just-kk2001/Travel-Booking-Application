
import React, { useEffect, useState } from 'react';
import './SplshScreen.css'; 

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); 
    }, 10000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-screen">
      <div className="splash-logo">
        <img src="https://academy.wetravel.com/hs-fs/hubfs/Imported_Blog_Media/skipping-mountains-3.jpg?width=730&height=480&name=skipping-mountains-3.jpg" alt="Travel App Logo" className="logo-animation"/>
        <h1 className="app-title">Welcome to KK tours and Travells'</h1>
      </div>
    </div>
  );
};

export default SplashScreen;
