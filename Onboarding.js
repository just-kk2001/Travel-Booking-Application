
import React, { useState } from 'react';
import './Onboarding.css';

const slides = [
  { id: 1, title: "Explore Destinations", description: "Discover new places to visit and experience the world like never before.", image: "good-free-photos.jpg" },
  { id: 2, title: "Book Your Stay", description: "Find the perfect accommodation and make bookings seamlessly.", image: "162578207.webp" },
  { id: 3, title: "Travel Worry-Free", description: "Enjoy hassle-free trips with our travel guides and support.", image: "hanging-deal-tags.webp" },
  { id: 4, title: "Get Exclusive Deals", description: "Unlock special discounts and offers for your dream vacations.", image: "sbest-free-travel-images-image-9.webp" }
];

const Onboarding = ({ onFinish }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onFinish(); 
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="onboarding-container">
      <div className="onboarding-slide">
        <img src= "https://img.freepik.com/free-photo/travel-explore-global-destination-trip-adventure-concept_53876-121559.jpg?size=626&ext=jpg" alt={slides[currentSlide].title} className="onboarding-image" />
        <h2>{slides[currentSlide].title}</h2>
        <p>{slides[currentSlide].description}</p>
      </div>

      <div className="onboarding-navigation">
        <button onClick={prevSlide} disabled={currentSlide === 0}>Previous</button>
        <button onClick={nextSlide}>{currentSlide === slides.length - 1 ? "Get Started" : "Next"}</button>
      </div>
    </div>
  );
};

export default Onboarding;
