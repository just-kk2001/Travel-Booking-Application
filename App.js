import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [userInfo, setUserInfo] = useState();
  
  const onSubmit = (data) => {
    setUserInfo(data);
    console.log(data);
  };

  return (
    <div className='container'>
      <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Registration Form</h1>
        <div className='ui divider'></div>
        <div className='ui form'>
          <div className='fields'>
            <label>Username</label>
            <input 
              type='text' 
              {...register("username", { required: "Username is required" })} 
              placeholder='Username' 
            />
            <p>{errors.username?.message}</p>
          </div>
          
          <div className='fields'>
            <label>Email</label>
            <input 
              type='email' 
              {...register("email", { 
                required: "Email is required", 
                pattern: { value: /^\S+@\S+$/i, message: "This is not a valid email" } 
              })} 
              placeholder='Email' 
            />
            <p>{errors.email?.message}</p>
          </div>
          
          <div className='fields'>
            <label>Password</label>
            <input 
              type='password' 
              {...register("password", { 
                required: "Password is required",
                minLength: { value: 4, message: "Password must be more than 4 characters" },
                maxLength: { value: 10, message: "Password cannot exceed more than 10 characters" }
              })} 
              placeholder='Password' 
            />
            <p>{errors.password?.message}</p>
          </div>
          
          <button className='fluid ui button blue'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;






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



/*
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
*/