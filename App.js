/*import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/hello';




function App() {
  const heu ={
      age:'12',
      naam: 'Arjun',
      kaam:'Bow',
      don:[1 ,2,3,6,4,5656,6,]
  };
  return (
    <div className='App'>
      <Login  heu={heu}/>
    </div>
    

);
}
export default App;
*/




//Preloader Ethun chalu
import React, { useState } from 'react';
import SplashScreen from './component/SplashScreen';
import Onboarding from './component/Onboarding';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);

  const handleSplashFinish = () => {
    setShowSplash(false);
    setShowOnboarding(true);
  };

  const handleOnboardingFinish = () => {
    
    alert('Onboarding Completed!');
  };

  return (
    <div>
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      {!showSplash && showOnboarding && <Onboarding onFinish={handleOnboardingFinish} />}
    </div>
  );
};

export default App

// import Preloader from "./component/Preloader/Preloader";
// function App() {
//   return (
//     <div className='App'>
//       <  Preloader/>
//     </div>
//   )
// }
// export default App